'use client'
import {
    ChakraComponent,
    FormControl,
    FormHelperText,
    FormLabel,
    forwardRef,
    Input,
    Textarea,
} from '@chakra-ui/react'
import { FieldError, UseFormRegister } from 'react-hook-form'

export type InputFieldProps = {
    type?: 'text' | 'email' | 'password' | 'textarea'
    label?: string
    error?: FieldError
} & Partial<ReturnType<UseFormRegister<Record<string, unknown>>>>

type DivComponent = ChakraComponent<'div'>
export const InputField = ((props: InputFieldProps) => {
    const { type = 'text', label, error, ...inputProps } = props

    return (
        <FormControl>
            {label && <FormLabel>{label}</FormLabel>}
            {type === 'textarea' ? (
                <Textarea bg="white" rows={8} {...inputProps} />
            ) : (
                <Input bg="white" type={type} {...inputProps} />
            )}
            {error && (
                <FormHelperText color="red">{error.message}</FormHelperText>
            )}
        </FormControl>
    )
}) as DivComponent
