import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
}

export default function Typewriter({ words, className}: TypewriterProps) {

    const [index, setIndex] = useState(0);
    const currentWord = words[index];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIndex(index => (index + 1) % words.length);
        }, 4000);

        return () => clearTimeout(timeout);
    }, [index, words.length]);


    return(
        <span key={currentWord} className={`${className} h-[60px] text-brand-black text-display relative bg-brand-light-blue typewriter border-r-1 border-r-brand-light-blue`} style={{"--count": currentWord.length} as React.CSSProperties}>
            {currentWord}
        </span>
    )
}