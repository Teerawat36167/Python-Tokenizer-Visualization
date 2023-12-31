import {
  Flex,
  Button,
  Heading,
  Box,
  Divider,
  Code,
} from "@chakra-ui/react";

import { FaCheck } from "react-icons/fa";

const LeftBox = ({
  string,
  setString,
  handleReset,
  handleTextChange,
  handleSimulation,
  outputString,
  outputList,
  visibleButton
}) => {

  const indent = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const newText = `${string.substring(0, selectionStart)}\t${string.substring(selectionEnd)}`;
      setString(newText);
    }
  }

  return (
    <>
      <Box
        w={["20em", "20em", "40em", "40em", "40em", "30em"]}
        mr={[0, 0, 0, 0, 0, 24]}
        mt={[14, 14, 16, 16, 16, 0]}
      >
        <Flex align="flex-end" justify="space-between" height="150px">
          <Heading variant="title">Tokenizer Virtualization</Heading>
          <Code fontSize={["0.5em", null, "0.6em", null, null, "0.6em"]}>
            CHICKEN DONT'T EAT PORK
          </Code>
        </Flex>

        <Divider mb="6" />

        <Box>
          <Flex direction="rows">
            <Flex direction="column" width="70%">
              <Flex align="center">
                <Heading>Input String:</Heading>
              </Flex>
              <textarea
                style={{
                  fontSize: ["0.7em", "0.7em", "0.9em"],
                  margin: "1rem 0",
                  width: "100%",
                  fontFamily: "monospace",
                  fontSize: "14px",
                  color: "#000",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "10px",
                  resize: "none",
                  "&::WebkitScrollbar" : {
                    display: "none",
                  }
                }}
                placeholder={"# Your Python code here\n\tdef hello_world():\n\t\tprint(\"Hello, World!\")\n\tfor i in range(5):\n\t\tprint(i)"}
                value={string}
                onChange={handleTextChange}
                onKeyDown={indent}
                rows={4}
                cols={50}
              />
              <Flex justify="space-between" align="center">
                <Flex>
                  <Button
                    onClick={handleSimulation}
                    disabled={!visibleButton}
                  >
                    Simulate
                  </Button>
                  <Button
                    variant="clear"
                    onClick={handleReset}
                  >
                    Clear
                  </Button>
                </Flex>
              </Flex>
              <Flex align="center">
                <Heading>Output String:</Heading>
              </Flex>
              <div className="box" style={{
                  fontSize: ["0.7em", "0.7em", "0.9em"],
                  margin: "1rem 0",
                  height: "8rem",
                  width: "100%",
                  fontFamily: "monospace",
                  fontSize: "14px",
                  color: "#000",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "10px",
                  overflow: "scroll",
                  
                }}>
                {outputString}
              </div>
            </Flex>
            <Flex direction="column" width="20%" ml="10%">
              Process
              <Flex direction="column" height="300px" overflow="scroll" className="box">
                {outputList.map((value , index) => (
                  <Box key={index} display="flex" justifyContent="space-around" mt="3" border="1px" paddingX="2" paddingY="3">
                    {value.value}
                    {value.check && <FaCheck />}
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default LeftBox;
