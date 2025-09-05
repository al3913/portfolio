'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  connections: Set<number>;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          color: 'rgba(204, 220, 255, 0.2)',
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          connections: new Set(),
        });
      }
      particlesRef.current = particles;
    };

    // Update particles
    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((particle, index) => {
        // Calculate distance to mouse
        const dxMouse = mouse.x - particle.x;
        const dyMouse = mouse.y - particle.y;
        const mouseDistance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        // Add gravitational effect if within range
        if (mouseDistance < 150) {
          const force = 0.02; // Strength of gravitational pull
          const angle = Math.atan2(dyMouse, dxMouse);
          
          // Apply gravitational force
          particle.speedX += Math.cos(angle) * force;
          particle.speedY += Math.sin(angle) * force;
          
          // Add some resistance to prevent particles from moving too fast
          particle.speedX *= 0.98;
          particle.speedY *= 0.98;
        } else {
          // When out of range, gradually return to random movement
          const targetSpeed = 0.5; // Target speed for random movement
          const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
          
          if (currentSpeed > targetSpeed) {
            // Gradually reduce speed
            particle.speedX *= 0.95;
            particle.speedY *= 0.95;
          } else {
            // Add some random variation to direction
            particle.speedX += (Math.random() - 0.5) * 0.1;
            particle.speedY += (Math.random() - 0.5) * 0.1;
          }
        }

        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Reset connections
        particle.connections.clear();

        // Connect particles that are close to each other
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = otherParticle.x - particle.x;
            const dy = otherParticle.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              particle.connections.add(otherIndex);
            }
          }
        });

        // Connect to mouse if close enough
        if (mouseDistance < 200) {
          particle.connections.add(-1);
        }
      });
    };

    // Draw particles
    const drawParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((particle) => {
        // Draw connections to other particles
        particle.connections.forEach((connectionIndex) => {
          if (connectionIndex === -1) {
            // Draw curved connection to mouse
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const opacity = 1 - (distance / 200);

            // Calculate control point for curve
            const midX = (particle.x + mouse.x) / 2;
            const midY = (particle.y + mouse.y) / 2;
            
            // Create perpendicular offset for curve
            const angle = Math.atan2(dy, dx);
            const perpAngle = angle + Math.PI / 2;
            const curveIntensity = Math.min(distance * 0.2, 50); // Adjust curve intensity based on distance
            
            const controlX = midX + Math.cos(perpAngle) * curveIntensity;
            const controlY = midY + Math.sin(perpAngle) * curveIntensity;

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.quadraticCurveTo(controlX, controlY, mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(204, 220, 255, ${opacity * 0.45})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          } else {
            // Draw curved connections to other particles
            const connectedParticle = particles[connectionIndex];
            const dx = connectedParticle.x - particle.x;
            const dy = connectedParticle.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const opacity = 1 - (distance / 150);
            
            // Calculate control point for curve
            const midX = (particle.x + connectedParticle.x) / 2;
            const midY = (particle.y + connectedParticle.y) / 2;
            
            // Create perpendicular offset for curve
            const angle = Math.atan2(dy, dx);
            const perpAngle = angle + Math.PI / 2;
            const curveIntensity = Math.min(distance * 0.15, 50); // Smaller curve for particle connections
            
            const controlX = midX + Math.cos(perpAngle) * curveIntensity;
            const controlY = midY + Math.sin(perpAngle) * curveIntensity;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.quadraticCurveTo(controlX, controlY, connectedParticle.x, connectedParticle.y);
            ctx.strokeStyle = `rgba(204, 220, 255, ${opacity * 0.35})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw mouse particle
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(204, 220, 255, 0.4)';
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    animate();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };

    // Add mouse move listener to the window instead of just the canvas
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-black -z-10"
      style={{ touchAction: 'none' }}
    />
  );
} 