import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface Recipe {
  title: string;
  ingredients: string;
  instructions: string;
  category: string;
  image?: File;
}

const NewRecipe: React.FC = () => {
  const [formData, setFormData] = useState<Recipe>({
    title: "",
    ingredients: "",
    instructions: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setFormData({
      ...formData,
      category: event.target.value as string,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        margin: "auto",
        my: 5,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: '1px solid',
        borderRadius: "30px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        מתכון חדש
      </Typography>

      <TextField
        label="שם המתכון"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <TextField
        label="מרכיבים"
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        required
        multiline
        rows={4}
      />

      <TextField
        label="הוראות הכנה"
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
        required
        multiline
        rows={6}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="category">קטגוריה</InputLabel>
        <Select
          labelId="category"
          name="category"
          label="קטגוריה"
          value={formData.category}
          onChange={handleChangeSelect}
        >
          <MenuItem value="starters">מנות ראשונות</MenuItem>
          <MenuItem value="mainDishes">מנות עיקריות</MenuItem>
          <MenuItem value="sideDishes">תוספות</MenuItem>
          <MenuItem value="soups">מרקים </MenuItem>
          <MenuItem value="dessert">קינוחים</MenuItem>
        </Select>
      </FormControl>

      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<AddAPhotoOutlinedIcon sx={{ mx: "2" }} />}
      >
        העלאת תמונה
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>

      <Button type="submit" variant="contained">
        שליחת מתכון
      </Button>
    </Box>
  );
};

export default NewRecipe;
