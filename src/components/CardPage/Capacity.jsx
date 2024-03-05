import { Subtitle, CapacityText } from "./Card.styled";

export const Capacity = () => {
    return (
        <div>
            <Subtitle>Ємність енергії:</Subtitle>
            <select name="capacity">
                <option>Виберіть опцію</option>
                <option>5 Ah</option>
                <option>10 Ah</option>
                <option>15 Ah</option>
            </select>
            {/* <Box sx={{ maxWidth: 106, height: 30, margin: '0px' }}>
      <FormControl fullWidth sx={{ m: 1, minWidth: 106 }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box> */}      
            <CapacityText>Desc Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse distinctio officia dolorum exercitationem doloribus, tempora facilis labore earum doloremque ipsa nisi, hic quos. Esse tenetur iure explicabo officiis laudantium.</CapacityText>
        </div>
    );
};