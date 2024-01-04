import React from 'react'
import { useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react'

export default function KodlamaIoTextInput({...props}) {
//   console.log(props)
//   reflect api
    const [field,meta] = useField(props)
    // console.log(meta) // meta bir hata var mı yok mu onu verir.
    
    return (
    <FormField error ={meta.touched && !!meta.error}> 
     {/* metni boolean yap demektir !! işareti */}
        <input{...field}{...props}/>
        {meta.touched && !!meta.error? (
            <Label pointing baasic color= "red" content={meta.error}></Label>
        ):null}
    </FormField>
  )
}
