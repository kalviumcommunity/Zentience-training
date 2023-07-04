import React, { useEffect } from 'react';
import { Flex, Box, Image,IconButton, FormControl, FormLabel, Input, Button, Center } from '@chakra-ui/react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsPlusCircleFill } from 'react-icons/bs';
import LeftBar from '../SideBar/LeftBar';
import RightBar from '../SideBar/RightBar';
import useStudentStore from './StudentStore';



interface Student {
  number: number;
  Name: string;
  Rollno: number;
  Class: string;
  id:number;
}

const ManageStudent: React.FC = () => {

  const {Name,RollNo,setName,setRollNo,resetForm,Class,setClass,candidates,setcandidate} = useStudentStore();


  const link= process.env.REACT_APP_SERVER_LINK;


  console.log(link)
  const selectstudent = (e:any) => {
    fetch(`${link}/studentData`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const filtered=data.filter((item: Student) => item.Class === e.target.value);
        setcandidate(filtered);
        resetForm();
      })
      .catch((error) => {
        console.error('Error retrieving students:', error);
      });
  };
  

 


  const deletestudent = (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete it?");
    if (confirmed) {
      fetch(`${link}/studentData/${id}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          const filtered = candidates.filter((item: Student) => item.id !== id);
          setcandidate(filtered);
          console.log("Student data is deleted");
        })
        .catch((error) => {
          console.error('Error while deleting students:', error);
        });
    }
  };
  





 

  




  return (
    <div>
      <LeftBar />
      <RightBar />
      <Box as="div" ml="13rem" height="100vh" mr="13rem">
        <Flex mb="2.5rem" alignItems="center" pt="2rem" justifyContent="space-between">
          <Box ml="2rem" fontSize="2rem">
            Good Morning lorem!
          </Box>

          <Box mr="2rem" fontSize="1rem">
            <select onChange={(e)=>selectstudent(e)} >
              <option>Select Class</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
            </select>
          </Box>
        </Flex>

        <Box position="fixed" bottom="2.5rem" right="22rem" zIndex="999">
      
         <BsPlusCircleFill/>        
    </Box>

      
        {
        candidates.length>0?
        candidates.map((dummy,index) => (
          <Flex
            key={dummy.number}
            textAlign="center"
            _hover={{ border: '1px solid grey', borderRadius: '1rem' }}
            alignItems="center"
            justifyContent="space-between"
            pl="2.5rem"
            h="4rem"
          >
            <Flex >
                  <Flex>{index+1}</Flex>
                  <Flex ml={'2rem'} >
                    <Image h={'2rem'} borderRadius={'5rem'} w={'3rem'} src={"https://banner2.cleanpng.com/20180913/bqs/kisspng-clip-art-student-computer-icons-school-illustratio-5b9af2b9283992.3985997515368813371648.jpg"} />
                    </Flex>
                  <Flex ml={'2rem'} minW={'8rem'} >{dummy.Name}</Flex>
                  <Flex ml={'4rem'} >{dummy.Rollno}</Flex>
            </Flex>
            <Flex>
              <Flex mr="2rem">
                <MdOutlineModeEdit   />
              </Flex>
              <Flex mr="2rem">
                <RiDeleteBinLine color='red' onClick={()=>deletestudent(dummy.id)}  />
              </Flex>
            </Flex>
          </Flex>
        ))
        :
        <Flex mt={'5rem'} fontSize={'2rem'} justifyContent={'center'}>
          Please Select a class...
        </Flex>
      
      }
      </Box>
    </div>
  );
};

export default ManageStudent;
