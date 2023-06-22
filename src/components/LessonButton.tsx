import React from "react";
import { Button, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export const LessonButton = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" size="medium">Primary testt
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined"  href="#outlined-buttons">
          Link
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        {" "}
        <Button color="secondary" >Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>

        <Button variant="contained" color="success" startIcon={<AddIcon/>}>
          Ekle
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>

<Button variant="contained" color="success" endIcon={<AddIcon/>} onClick={()=>alert("Tıklandı")}>
  Ekle
</Button>
</Stack>
    </Stack>
  );
};
