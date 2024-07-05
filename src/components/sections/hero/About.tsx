import { Text,Image, Box } from "@chakra-ui/react";
import  AboutImage  from "../../../assets/about/about-me.png"
 
const About = () => {
  return (
    <div className="bg-red-800 flex justify-between items-center px-60 py-20 space-x-40">
      <div>
        <h2 className="text-6xl text-white font-bold tracking-widest mb-10">
          ABOUT ME
        </h2>
        <Text color={"white"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
			<div>
				<Box boxSize={"md"}>
					<Image src={AboutImage} alt='About Image' />
				</Box>
			</div>
    </div>
  );
};

export default About;
