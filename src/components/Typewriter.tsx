

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
}

export default function Typewriter({ words }: TypewriterProps) {

    const [index, setIndex] = useState(0);
    const currentWord = words[index];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIndex(index => (index + 1) % words.length);
        }, 4000);

        return () => clearTimeout(timeout);
    }, [index]);


    return(
        <span key={currentWord} className="text-brand-black text-hero relative bg-brand-light-blue typewriter" style={{"--count": currentWord.length} as React.CSSProperties}>
            {currentWord}
        </span>
    )
}