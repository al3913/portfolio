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
    }, [index]);


    return(
        <span key={currentWord} className={`${className} text-brand-black text-hero relative bg-brand-light-blue typewriter`} style={{"--count": currentWord.length} as React.CSSProperties}>
            {currentWord}
        </span>
    )
}