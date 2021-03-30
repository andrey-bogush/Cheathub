import { withRouter } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Select,
  Button,
  Container,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

export const AddSnippet = withRouter(({ history }) => {
  return (
    <Container>
      <form
      action="/snippet/add"
      method="POST"
      >
        <FormControl id="title">
          <FormLabel>Title:</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="body">
          <FormLabel>Code Snippet:</FormLabel>
          <Textarea></Textarea>
        </FormControl>
        <FormControl id="notes">
          <FormLabel>Notes:</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="language">
          <FormLabel>Language:</FormLabel>
          <Select placeholder="Select Language">
            <option value="C">C</option>
            <option value="C#">C#</option>
            <option value="C++">C++</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="Java">Java</option>
            <option value="Javascript">Javascript</option>
            <option value="Less">Less</option>
            <option value="Objective-C">Objective-C</option>
            <option value="Objective-C++">Objective-C++</option>
            <option value="Perl">Perl</option>
            <option value="PHP">PHP</option>
            <option value="Python">Python</option>
            <option value="Ruby">Ruby</option>
            <option value="Sass">Sass</option>
            <option value="SCSS">SCSS</option>
          </Select>
        </FormControl>
        <FormControl id="tags">
          <FormLabel for="tags">Tags: (separate by semicolon)</FormLabel>
          <Input type="text" />
        </FormControl>
        <Button type="submit">Add Snippet</Button>
      </form>
    </Container>
  );
});