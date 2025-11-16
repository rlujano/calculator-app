import CalculatorButton from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/theme'
import { useCalculator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {

    const {
        formula, buildNumber, clean, toggleSign
    } = useCalculator()

    return (
        <View style={globalStyles.calculatorContainer}>
            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
                <ThemeText variant='h1'>{ formula }</ThemeText>
                <ThemeText variant='h2'>250</ThemeText>
            </View>

            {/* Botones */}

            <View style={globalStyles.row}>
                <CalculatorButton 
                    label='C' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={clean} 
                />
                <CalculatorButton 
                    label='+/-' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={toggleSign} 
                />
                <CalculatorButton 
                    label='del' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('del')} 
                />
                <CalculatorButton 
                    label='/' 
                    color={Colors.orange}
                    onPress={() => buildNumber('/')} 
                />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton 
                    label='7' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('7')} 
                />
                <CalculatorButton 
                    label='8' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('8')} 
                />
                <CalculatorButton 
                    label='9' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('9')} 
                />
                <CalculatorButton 
                    label='X' 
                    color={Colors.orange}
                    onPress={() => buildNumber('X')} 
                />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton 
                    label='4' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('4')} 
                />
                <CalculatorButton 
                    label='5' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('5')} 
                />
                <CalculatorButton 
                    label='6' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('6')} 
                />
                <CalculatorButton 
                    label='-' 
                    color={Colors.orange}
                    onPress={() => buildNumber('-')} 
                />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton 
                    label='1' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('1')} 
                />
                <CalculatorButton 
                    label='2' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('2')} 
                />
                <CalculatorButton 
                    label='3' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('3')} 
                />
                <CalculatorButton 
                    label='+' 
                    color={Colors.orange}
                    onPress={() => buildNumber('+')} 
                />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton 
                    label='0' 
                    blackText
                    doubleSize
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('0')} 
                />
                <CalculatorButton 
                    label='.' 
                    blackText
                    color={Colors.lightGray} 
                    onPress={() => buildNumber('.')} 
                />
                <CalculatorButton 
                    label='=' 
                    color={Colors.orange}
                    onPress={() => buildNumber('=')} 
                />
            </View>

        </View>
    )
}

export default CalculatorApp