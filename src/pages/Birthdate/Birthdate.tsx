import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { useBirthdate } from "./useBirthdate"
import { months, years } from "./constants"
import Button from "shared/components/Button"
import Page from "shared/components/Page"

const Birthdate = () => {
  const { month, day, year, days, handlePickMonth, handlePickDay, handlePickYear, handleSave, isDisabled } =
    useBirthdate()

  return (
    <Page>
      <Typography variant="h1" mb={10}>
        What’s your date of birth?
      </Typography>

      <FormControl sx={{ mb: 7, width: 220 }}>
        <InputLabel id="month-select">Months</InputLabel>
        <Select<number>
          labelId="month-select"
          id="month-select"
          value={month}
          label="month"
          onChange={handlePickMonth}
          sx={[(theme) => ({ ...theme.typography.h4, fontWeight: 400, borderRadius: "20px", textAlign: "left" })]}
        >
          <MenuItem disabled value={0}>
            <em>Months</em>
          </MenuItem>
          {months.map(({ value, label }) => (
            <MenuItem key={value} value={value} sx={{ textTransform: "capitalize" }}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ mb: 7, width: 220 }}>
        <InputLabel id="day-select">Day</InputLabel>
        <Select<number>
          labelId="day-select"
          id="day-select"
          value={day}
          label="day"
          onChange={handlePickDay}
          sx={[(theme) => ({ ...theme.typography.h4, fontWeight: 400, borderRadius: "20px", textAlign: "left" })]}
        >
          <MenuItem disabled value={0}>
            <em>Days</em>
          </MenuItem>
          {Array.from({ length: days }, (_, index) => (
            <MenuItem key={index} value={index + 1}>
              {index + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ mb: 10, width: 220 }}>
        <InputLabel id="year-select">Year</InputLabel>
        <Select<number>
          labelId="year-select"
          id="year-select"
          value={year}
          label="year"
          onChange={handlePickYear}
          sx={[(theme) => ({ ...theme.typography.h4, fontWeight: 400, borderRadius: "20px", textAlign: "left" })]}
        >
          <MenuItem disabled value={0}>
            <em>Years</em>
          </MenuItem>
          {years.map((year) => (
            <MenuItem key={year} value={year} sx={{ textTransform: "capitalize" }}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button onClick={handleSave} disabled={isDisabled} fullWidth variant="contained">
        next
      </Button>

      <Typography component="p" variant="h5" color="black.401" mt="auto">
        Nicosia, Cyprus
      </Typography>
    </Page>
  )
}

export default Birthdate
