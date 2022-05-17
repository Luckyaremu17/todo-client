import { Button, Box, TextField } from "@material-ui/core";
import { useState } from "react";

const CreateToDoFrom = ({ onSubmit }) => {
  const [form, setForm] = useState({
    Title: "",
    Text: "",
  });
  const handleForm = (event) => {
    const { id, value } = event.target;
    setForm((prevState) => ({ ...prevState, [id]: value }));
  };

  const onSubmitForm = () => {
    if (form?.Title && form?.Text) {
      onSubmit(form);
      setForm({
        Title: "",
        Text: "",
      });
    }
    console.log("sorry you did not enter any thing in text or title field");
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid #32a852",
        borderRadius: 5,
        marginTop: 15,
        padding: 20,
        width: 400,
      }}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ marginTop: 10 }}>
        <TextField
          id="Title"
          label={`Type Title`}
          placeholder="Title"
          value={form.Title}
          style={{ width: "100%" }}
          onChange={handleForm}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <TextField
          id="Text"
          label={`Type Text`}
          placeholder="Text"
          value={form.Text}
          style={{ width: "100%" }}
          onChange={handleForm}
        />
      </div>
      <Button
        onClick={onSubmitForm}
        variant="outlined"
        style={{ marginTop: 20 }}
      >
        Add
      </Button>
    </Box>
  );
};

export default CreateToDoFrom;
