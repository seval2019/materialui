import React, { useState } from 'react';
import { RadioGroup, FormControlLabel, FormControl, FormLabel, Radio, FormHelperText } from "@mui/material";

export const LessonRadioGroup = () => {
  const [value, setValue] = useState('');

  console.log(value)

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // }

  return (
    <FormControl>
      <FormLabel>Maaş Beklentisi</FormLabel>
      <RadioGroup row name="extected-salary" value={value} onChange={(e)=>setValue(e.target.value)}>
        <FormControlLabel label="2000$" value="2000" control={<Radio />} />
        <FormControlLabel label="3000$" value="3000" control={<Radio />} />
        <FormControlLabel label="other" value="other" control={<Radio />} />
      </RadioGroup>
    </FormControl>

  );
};
