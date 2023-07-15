import React, { useEffect, useState } from 'react';
import { Flex, Box,Text, Image, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useTable } from "react-table";
import LeftBar from '../SideBar/LeftBar';
import RightBar from '../SideBar/RightBar';
import useStudentStore from '../../Store/StudentStore';


interface Student {
  Name: string;
  Rollno: number;
  Class: string;
  _id:number;
  Teachername:string;
}



const ManageStudent: React.FC = () => {

  const {Name,Rollno,email,password,setName,setRollno,resetForm,Class,setClass,candidates,setcandidate,setemail,setpassword,currentElementId,setcurrentElementId} = useStudentStore();

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
      const studentData = { Name, Rollno,Teachername };
      
      generateEmailAndPassword();

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
  
  const selectstudent = async (e: any) => {
    try {
      const response = await fetch(`${link}/studentData`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to retrieve student data');
      }
  
      const data = await response.json();
      const filtered = data.filter((item: Student) => e === item.Class);
      setcandidate(filtered);
    } catch (error) {
      console.error('Error retrieving students:', error);
    }
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
          selectstudent(data.message);
         
          
        })
        .catch((error) => {
          console.error('Error while deleting students:', error);
        });
    }
  };

  const Teachername=sessionStorage.getItem("username");
  

  const handleaddstudentform=()=>{
    const formElement = document.querySelector('.addstudent') as HTMLElement;
    if (formElement.style.display === 'none') {
      formElement.style.display = 'flex';
    } else {
      formElement.style.display = 'none';
    }
  }

  const handleaddstudent=()=>{
    const studentData = { Name, Rollno,Class,Teachername };

    generateEmailAndPassword();

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

        // Commenting out the following code so that this window doesn't disappear on clicking "copy"

        // if (formElement.style.display === 'none') {
        //   formElement.style.display = 'flex';
        // } else {
        //   formElement.style.display = 'none';
        // }

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
              <MdOutlineModeEdit onClick={() => handleform(row.original._id)} />
            </Flex>
            <Flex mr="4rem">
              <RiDeleteBinLine color="red" onClick={() => {deletestudent(row.original._id);
             
              }} />
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


  const [emailGenerated, setEmailGenerated] = useState(false);
 

  const generateEmailAndPassword = () => {
    let email = Name.trim().split(" ").join().toLowerCase() + (Math.floor(Math.random() * 100000)).toString() + "@xyz.com";
    let length = 12,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log([email, password]);
    setemail(email);
    setpassword(password);

    setEmailGenerated(true);

    const studentData = { email, password,Teachername };

    fetch(`${link}/addStudent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          handledetail();

      })
      .catch(error => {
        console.error('Error while updating student data:', error);
      });
    
    return [email, password]
  }

  

  const handledetail=()=>{

    const formElement = document.querySelector('.detail') as HTMLElement;
          if (formElement.style.display === 'none') {
            formElement.style.display = 'inline';
          } else {
            formElement.style.display = 'none';
          }

    const textToCopy = `Email: ${email} Password: ${password}`
    navigator.clipboard.writeText(textToCopy);
  }



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





    <Box
      className='detail'
      display={'none'}
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      backgroundColor="white"
      width="60%"
      maxWidth="500px"
      borderRadius="lg"
      height={'40vh'}
      boxShadow="lg"
      
      zIndex={9999}
    >
      <Flex  justifyContent={'center'} m={'2rem'} fontSize={'1.3rem'} fontFamily={'Poppins'} >Student login detail</Flex>
      <Box >
        <Flex m={'1.5rem'}>
        <FormControl
              pl={'1.5rem'}
              height={'2.4rem'}
              fontSize={'1.2rem'}
              borderRadius="md"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.300"
              outline="1px solid"
              outlineColor="gray.300">
                Email : {email}
                </FormControl>
       
        </Flex>
        <Box m={'1.5rem'}  >
        <FormControl mb={'1rem'} borderRadius="md"
        height={'2.4rem'}
        fontSize={'1.2rem'}
        pl={'1.5rem'}
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.300"
              outline="1px solid"
              outlineColor="gray.300">
                Password : {password}
                </FormControl>
          <Flex justifyContent={'center'} >
         <Button type={'submit'} onClick={()=>handledetail()} colorScheme="blue">
          Copy
        </Button>
        </Flex>
        </Box>
        
      </Box>
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
      <Box width="60%"
      maxWidth="500px" bg="white" p={4} borderRadius="md" boxShadow="md" zIndex="10">
        <Flex justifyContent={'center'} mb={'2rem'} fontSize={'1.3rem'} fontFamily={'Poppins'} >Update Student</Flex>
        <FormControl borderRadius="md"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.300"
              outline="1px solid"
              outlineColor="gray.300">
          
          <Input value={Name} onChange={(e)=>handlestudentname(e)} type="text" id="name" placeholder="Name" />
        </FormControl>
        <FormControl mt={4} 
        borderRadius="md"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.300"
        outline="1px solid"
        outlineColor="gray.300">
          
          <Input value={Rollno} onChange={(e)=>handlestudentrollno((e))} type="number" id="rollNo" placeholder="Roll number" />
        </FormControl>
        <Button type={'submit'} onClick={()=>handlestudentupdate()} mt={'2rem'} colorScheme="blue">
          Update
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
        onClick={()=>handleaddstudentform()}
      />
      <Box width="60%"
      maxWidth="500px" bg="white" p={4} borderRadius="lg" boxShadow="md" zIndex="10">
        <Flex justifyContent={'center'} mb={'2rem'} fontSize={'1.3rem'} fontFamily={'Poppins'}>Add new student</Flex>
        <FormControl     
      borderRadius="md"
      boxShadow="lg"
      border="0.5px solid"
      borderColor="gray.300"
      outline="1px solid"
      outlineColor="gray.300">
          <Flex  >
        
          <Input value={Name} onChange={(e)=>handlestudentname(e)} type="text" id="name" placeholder="Name" />
          </Flex>
        </FormControl>
        <FormControl mt={4}
              borderRadius="md"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.300"
              outline="1px solid"
              outlineColor="gray.300">
          <Flex>
          
          <Input value={Rollno} onChange={(e)=>handlestudentrollno((e))} type="number" id="rollNo" placeholder="Roll number" />
          </Flex>
        </FormControl>
        <FormControl mt={4}
              borderRadius="md"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.300"
              outline="1px solid"
              outlineColor="gray.300">
          <Flex>
          
          <Input value={Class} onChange={(e)=>setClass(e.target.value)} type="text" id="rollNo" placeholder="Class" />
          </Flex>
        </FormControl>
        <Button type={'submit'} onClick={()=>handleaddstudent()}  m={'2rem'} colorScheme="blue">
          Generate Email & Password
        </Button>
      </Box>
    </Box> 

    <Flex onClick={()=>handleaddstudentform()} sx={addButtonStyles}>
        <Text pt={'5px'} >+</Text>
    </Flex>
        
       
    </Box>
    </div>
  );
};

export default ManageStudent;