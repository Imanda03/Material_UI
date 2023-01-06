import React from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";

const MuiCheckBox = () => {
  const [accepted, setAccepted] = React.useState(false);
  const [skills, setSkills] = React.useState<string[]>([]);
  console.log({ skills });
  const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccepted(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControl>
          <FormControlLabel
            label="I have accept the terms and conditions."
            control={<Checkbox checked={accepted} onChange={handleEvent} />}
          />
        </FormControl>
      </Box>
      <Box>
        <FormLabel>Skills</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="HTML"
            control={
              <Checkbox
                value="html"
                checked={skills.includes("html")}
                onChange={handleSkillChange}
              />
            }
          />
          <FormControlLabel
            label="JavaScript"
            control={
              <Checkbox
                value="js"
                checked={skills.includes("js")}
                onChange={handleSkillChange}
              />
            }
          />
          <FormControlLabel
            label="Python"
            control={
              <Checkbox
                value="py"
                checked={skills.includes("py")}
                onChange={handleSkillChange}
              />
            }
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
