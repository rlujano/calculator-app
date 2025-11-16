import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'X',
    divide = '/'
};

export const useCalculator = () => {
    const [formula, setFormula] = useState('23232');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator | null>(null);

    useEffect(() => {
        setFormula(number)
    }, [number])

    const buildNumber = (numberString: string) => {
        console.log({numberString}); 
    }

    return {
        // props
        formula,
        number,
        prevNumber,
        // methods
        buildNumber,

    }
}