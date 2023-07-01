import React, { useState } from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import LeftBar from '../SideBar/LeftBar';
import RightBar from '../SideBar/RightBar';
import DummyData from './StudentData.json';

interface Student {
  number: number;
  Image: string;
  Name: string;
  Rollno: number;
  Class: string;
}

const ManageStudent: React.FC = () => {

  const [filteredData, setFilteredData] = useState<Student[]>([]);

  const studentClassFilter = (e: any) => {
    const selectedClass = e.target.value;

    if (selectedClass !== '') {
      const data = DummyData.filter((item: Student) => item.Class === selectedClass);
      setFilteredData(data);
    } else {
      setFilteredData(DummyData);
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
            <select onChange={studentClassFilter}>
              <option>Select Class</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
            </select>
          </Box>
        </Flex>

        {
        filteredData.length>0?
        filteredData.map((dummy) => (
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
                  <Flex>{dummy.number}</Flex>
                  <Flex ml={'2rem'} >
                    <Image h={'2rem'} borderRadius={'5rem'} w={'3rem'} src={dummy.Image} />
                    </Flex>
                  <Flex ml={'2rem'} minW={'8rem'} >{dummy.Name}</Flex>
                  <Flex ml={'4rem'} >{dummy.Rollno}</Flex>
            </Flex>
            <Flex>
              <Flex mr="2rem">
                <MdOutlineModeEdit />
              </Flex>
              <Flex mr="2rem">
                <RiDeleteBinLine />
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
