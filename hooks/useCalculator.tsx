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

    const lastOperation = useRef<Operator | undefined>(undefined);

    useEffect(() => {
        setFormula(number)
    }, [number])

    const clean = () => {
        setNumber('0');
        setFormula('0');
        setPrevNumber('0');

        lastOperation.current = undefined;
    }


    const toggleSign = () => {
        if(number.includes('-')){
            return setNumber(number.replace('-', ''))
        }

        setNumber('-' + number);
    }

    const deleteLast = () => {
        // Por mejorar la logica para borrar
        console.log(number);
        if(number.includes('-')){
            if(number.length > 2){
                setNumber(number.slice(0, -1));
            }else{
                setNumber('0');
            }
        } else {
            if(number.length > 1){
                setNumber(number.slice(0, -1));
            }else{
                setNumber('0');
            }
        }
        
    }

    const buildNumber = (numberString: string) => {
        // Verificar si existe el punto decimal
        if(number.includes('.') && numberString === '.') return;

        if(number.startsWith('0') || number.startsWith('-0')) {
            if(numberString === '.'){
                return setNumber(number + numberString);
            }

            if(numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            if(numberString !== '0' && !number.includes('.')){
                return setNumber(numberString)
            }

            // No permitir el formato 0000000.000

            if(numberString === '0' && !number.includes('.')){
                return;
            }
        }

        setNumber(number + numberString)

    }

    return {
        // props
        formula,
        number,
        prevNumber,
        // methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast

    }
}