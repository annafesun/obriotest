import { Link, TextField, Typography } from "@mui/material"
import Page from "shared/components/Page"
import { useAppSelector } from "store"
import Button from "shared/components/Button"
import { useCallback, useState } from "react"

const Email = () => {
  const user = useAppSelector((state) => state.user)

  const [email, setEmail] = useState("")
  const handleChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value),
    []
  )

  const isValidEmail =
    !!email &&
    email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

  const handleSave = () => {
    // ... axios.post("send/user", {user})
    console.log(user)
    setEmail("")
    alert("The email has been sent")
  }

  return (
    <Page>
      <Typography sx={{ fontWeight: 700 }} variant="h2" mb={9}>
        Enter your email to see how you can grow with Nebula
      </Typography>
      <TextField
        fullWidth
        sx={[
          (theme) => ({
            mb: 9,
            "& .MuiInputBase-root": { borderRadius: theme.shape.borderRadius(12) },
          }),
        ]}
        id="outlined-basic"
        label="Your email"
        variant="outlined"
        value={email}
        onChange={handleChangeEmail}
      />
      <Typography variant="h5" mb={6}>
        *Nebula does not share any personal information. We&apos;ll email you a copy of your program for convenient
        access.
      </Typography>
      <Typography variant="h5" mb={12} color="black.401">
        By continuing I agree with{" "}
        <Link sx={{ cursor: "pointer" }} color="purple.800">
          Privacy policy
        </Link>{" "}
        and{" "}
        <Link sx={{ cursor: "pointer" }} color="purple.800">
          Terms of use
        </Link>
        .
      </Typography>
      <Button
        disabled={!isValidEmail}
        smallText
        sx={{ mb: 6 }}
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => handleSave()}
      >
        Continue
      </Button>
      <Typography component="p" variant="h5" color="black.401" mt="auto">
        Nicosia, Cyprus
      </Typography>
    </Page>
  )
}

export default Email
