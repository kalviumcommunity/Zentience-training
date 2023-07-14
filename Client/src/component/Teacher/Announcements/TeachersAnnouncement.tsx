// import React from "react";
// import {
//   Container,
//   Heading,
//   Text,
//   Select,
//   Input,
//   Textarea,
//   Button,
//   Flex,
// } from "@chakra-ui/react";
// import LeftBar from "../SideBar/LeftBar";
// import useAnnouncementStore from "../../Store/AnnouncementStore";
// import RightBar from "../SideBar/RightBar";

// function TeachersAnnouncements() {
//   const { title, description, setTitle, setDescription, resetForm } =
//     useAnnouncementStore();

//   const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(event.target.value);
//   };

//   const handleDescriptionChange = (
//     event: React.ChangeEvent<HTMLTextAreaElement>
//   ) => {
//     setDescription(event.target.value);
//   };

//   const handlePost = () => {
//     const announcementData = { title, description };

//     fetch(`${process.env.REACT_APP_SERVER_LINK}/announcements`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(announcementData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Announcement posted successfully:", data);
//         setTitle("");
//         setDescription("");
//       })
//       .catch((error) => {
//         console.error("Error posting announcement:", error);
//       });
//     resetForm();
//   };

//   return (
//     <div className="announcements">
//       <LeftBar />
//       <Container maxW="1190px" ml="170px">
//         <Flex flexDirection="column" alignItems="flex-end">
//           <Select
//             fontWeight="700"
//             width="229px"
//             placeholder="Select Class"
//             marginTop="25px"
//             alignSelf="flex-end"
//           >
//             <option value="option1">Class X-A</option>
//             <option value="option2">Class X-B</option>
//             <option value="option3">Class X-C</option>
//           </Select>
//           <div style={{ marginTop: "20px" }}>
//             <Heading fontSize="25px" marginBottom="70px">
//               Compose Announcement
//             </Heading>
//             <Input
//               width="1074px"
//               fontWeight="600"
//               color="rgba(0, 0, 0, 0.75)"
//               placeholder="Title"
//               value={title}
//               onChange={handleTitleChange}
//             />
//           </div>
//           <div style={{ marginTop: "15px" }}>
//             <Textarea
//               width="1074px"
//               height="381px"
//               fontWeight="600"
//               color="rgba(0, 0, 0, 0.75)"
//               resize="none"
//               placeholder="Description"
//               value={description}
//               onChange={handleDescriptionChange}
//             />
//           </div>
//           <Button
//             marginTop="20px"
//             backgroundColor="black"
//             width="229px"
//             fontSize="15"
//             color="white"
//             alignSelf="flex-end"
//             onClick={handlePost}
//           >
//             POST
//           </Button>
//         </Flex>
//       </Container>
//       <RightBar />
//     </div>
//   );
// }

// export default TeachersAnnouncements;


import React from "react";
import {
  Container,
  Heading,
  Text,
  Select,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import LeftBar from "../SideBar/LeftBar";
import useAnnouncementStore from "../../Store/AnnouncementStore";
import RightBar from "../SideBar/RightBar";
import axios from "axios";

function TeachersAnnouncements() {
  const { title, description, setTitle, setDescription, resetForm } =
    useAnnouncementStore();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handlePost = () => {
    const announcementData = { title, description };

    axios
      .post(`${process.env.REACT_APP_SERVER_LINK}/posts`, announcementData)
      .then((response) => {
        console.log("Announcement posted successfully:", response.data);
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error posting announcement:", error);
      });
    resetForm();
  };

  return (
    <div className="announcements">
      <LeftBar />
      <Container maxW="1190px" ml="170px">
        <Flex flexDirection="column" alignItems="flex-end">
          <Select
            fontWeight="700"
            width="229px"
            placeholder="Select Class"
            marginTop="25px"
            alignSelf="flex-end"
          >
            <option value="option1">Class X-A</option>
            <option value="option2">Class X-B</option>
            <option value="option3">Class X-C</option>
          </Select>
          <div style={{ marginTop: "20px" }}>
            <Heading fontSize="25px" marginBottom="70px">
              Compose Announcement
            </Heading>
            <Input
              width="1074px"
              fontWeight="600"
              color="rgba(0, 0, 0, 0.75)"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Textarea
              width="1074px"
              height="381px"
              fontWeight="600"
              color="rgba(0, 0, 0, 0.75)"
              resize="none"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <Button
            marginTop="20px"
            backgroundColor="black"
            width="229px"
            fontSize="15"
            color="white"
            alignSelf="flex-end"
            onClick={handlePost}
          >
            POST
          </Button>
        </Flex>
      </Container>
      <RightBar />
    </div>
  );
}

export default TeachersAnnouncements;
