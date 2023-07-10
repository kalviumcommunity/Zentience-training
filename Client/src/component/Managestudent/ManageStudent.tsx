import React, { useEffect } from 'react';
import { Flex, Box,Text, Image,IconButton, FormControl, FormLabel, Input, Button, Center } from '@chakra-ui/react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useTable } from "react-table";
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

  const {Name,Rollno,setName,setRollno,resetForm,Class,setClass,candidates,setcandidate,currentElementId,setcurrentElementId} = useStudentStore();

  const addButtonStyles = {
    height: "60px",
    width: "60px",
    position: "fixed",
    right: "430px",
    bottom: "30px",
    justifyContent: "center",
    align: "center",
    borderRadius: "50%",
    fontSize:"30px",
    fontWeight:"600",
    bg: "#14274E",
    textColor: "white",
    cursor: "pointer"
}

  const link= process.env.REACT_APP_SERVER_LINK;

  const handlestudentname=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value);
  }

  const handlestudentrollno=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setRollno(parseInt(event.target.value));
  }

    const handlestudentupdate = () => {
    const studentData = { Name, Rollno };

    fetch(`${link}/studentData/${currentElementId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    })
      .then(response => response.json())
      .then(data => {
        setName('');
        setRollno(0);
        selectstudent(Class);
        const formElement = document.querySelector('.form') as HTMLElement;
        if (formElement.style.display === 'none') {
          formElement.style.display = 'flex';
        } else {
          formElement.style.display = 'none';
        }
      })
      .catch(error => {
        console.error('Error while updating student data:', error);
      });
    resetForm();
  };
  
  const selectstudent = (e:any) => {
    fetch(`${link}/studentData`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const filtered=data.filter((item: Student) => item.Class === e);
        setcandidate(filtered);
        resetForm();
      })
      .catch((error) => {
        console.error('Error retrieving students:', error);
      });
  };


    const handleform=(e:any)=>{
      setcurrentElementId(e);
    const formElement = document.querySelector('.form') as HTMLElement;
    if (formElement.style.display === 'none') {
      formElement.style.display = 'flex';
    } else {
      formElement.style.display = 'none';
    }
  }
  

 


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
  

  const handleaddstudentform=()=>{
    const formElement = document.querySelector('.addstudent') as HTMLElement;
    if (formElement.style.display === 'none') {
      formElement.style.display = 'flex';
    } else {
      formElement.style.display = 'none';
    }
  }

  const handleaddstudent=()=>{
    const studentData = { Name, Rollno,Class };

    fetch(`${link}/studentData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    })
      .then(response => response.json())
      .then(data => {
        setName('');
        setRollno(0);
        // setClass('');
        selectstudent(Class);
        const formElement = document.querySelector('.addstudent') as HTMLElement;
        if (formElement.style.display === 'none') {
          formElement.style.display = 'flex';
        } else {
          formElement.style.display = 'none';
        }
      })
      .catch(error => {
        console.error('Error while updating student data:', error);
      });
    resetForm();
  }




  
 
  const columns: any[] = React.useMemo(
    () => [
      {
        Header: '_',
        accessor: (_:any, index:any) => index + 1,
      },
      {
        Header: '',
        accessor: 'Image',
        Cell: () => (
          <Flex ml={'-1rem'} >
            <Image h={'2rem'} borderRadius={'5rem'} w={'3rem'} src={"https://banner2.cleanpng.com/20180913/bqs/kisspng-clip-art-student-computer-icons-school-illustratio-5b9af2b9283992.3985997515368813371648.jpg"} />
          </Flex>
        ),
      },
      {
        Header: '',
        accessor: 'Name',
      },
      {
        Header: '',
        accessor: 'Rollno',
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({ row }:{row:any}) => (
          <Flex width={'40rem'} justifyContent={'flex-end'} >
            <Flex mr="4rem">
              <MdOutlineModeEdit onClick={() => handleform(row.original.id)} />
            </Flex>
            <Flex mr="4rem">
              <RiDeleteBinLine color="red" onClick={() => deletestudent(row.original.id)} />
            </Flex>
          </Flex>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<Student>({
    columns,
    data: candidates,
  });
 

  




  return (
    <div>
      <LeftBar  />
      <RightBar />
      <Box as="div" ml="13rem" height="100vh" mr="13rem">
        <Flex mb="2.5rem" alignItems="center" pt="2rem" justifyContent="space-between">
          <Box ml="2rem" fontSize="2rem">
            Good Morning lorem!
          </Box>

          <Box mr="2rem" fontSize="1rem">
            <select value={Class} onChange={(e)=>{selectstudent(e.target.value);setClass(e.target.value)}} >
              <option>Select Class</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
            </select>
          </Box>
        </Flex>




        <Box as="div"  height="100vh" ml={'4rem'}  >
      <table {...getTableProps()} style={{ width: '100%' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} style={{ padding: '1rem'}}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ padding: '1rem',width:'6%'}}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {candidates.length === 0 && (
        <Flex mt={'5rem'} fontSize={'2rem'} justifyContent={'center'}>
          Please Select a class...
        </Flex>
      )}
    </Box>




         <Box display={'none'} className='form' position="fixed" top="0" left="0" right="0" bottom="0"  textAlign={'center'} justifyContent="center" alignItems="center">
    
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor="rgba(0, 0, 0, 0.4)" // Adjust the background color and opacity as needed
        backdropFilter="blur(8px)" // Adjust the blur intensity as needed
      />
      <Box width="300px" bg="white" p={4} borderRadius="md" boxShadow="md" zIndex="10">
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input value={Name} onChange={(e)=>handlestudentname(e)} type="text" id="name" placeholder="Type student name..." />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="rollNo">Roll No</FormLabel>
          <Input value={Rollno} onChange={(e)=>handlestudentrollno((e))} type="number" id="rollNo" placeholder="Type roll number..." />
        </FormControl>
        <Button type={'submit'} onClick={()=>handlestudentupdate()} mt={4} colorScheme="blue">
          Submit
        </Button>
      </Box>
    </Box> 





    
    <Box display={'none'} className='addstudent' position="fixed" top="0" left="0" right="0" bottom="0"  textAlign={'center'} justifyContent="center" alignItems="center">
    
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundColor="rgba(0, 0, 0, 0.4)" // Adjust the background color and opacity as needed
      backdropFilter="blur(8px)" // Adjust the blur intensity as needed
    />
    <Box width="300px" bg="white" p={4} borderRadius="md" boxShadow="md" zIndex="10">
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input value={Name} onChange={(e)=>handlestudentname(e)} type="text" id="name" placeholder="Type student name..." />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel htmlFor="rollNo">Roll No</FormLabel>
        <Input value={Rollno} onChange={(e)=>handlestudentrollno((e))} type="number" id="rollNo" placeholder="Type roll number..." />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel htmlFor="class">Class</FormLabel>
        <Input value={Class} onChange={(e)=>setClass(e.target.value)} type="text" id="rollNo" placeholder="Enter class..." />
      </FormControl>
      <Button type={'submit'} onClick={()=>handleaddstudent()}  mt={4} colorScheme="blue">
        Submit
      </Button>
    </Box>
  </Box> 







    <Flex  onClick={()=>handleaddstudentform()} sx={addButtonStyles}>
            <Text pt={'5px'} >+</Text>
        </Flex>
      
       
      </Box>
    </div>
  );
};

export default ManageStudent;
