import React from 'react'
import {Flex,Box,Image} from '@chakra-ui/react'
import {MdOutlineModeEdit} from 'react-icons/md'
import {RiDeleteBinLine} from 'react-icons/ri'
import LeftBar from '../SideBar/LeftBar'
import RightBar from '../SideBar/RightBar'

const DummyData=[
  {
    number:1,
    Image:"https://banner2.cleanpng.com/20180913/bqs/kisspng-clip-art-student-computer-icons-school-illustratio-5b9af2b9283992.3985997515368813371648.jpg",
    Name:"Suresh",
    Rollno:4565,
  },
  {
    number:2,
    Image:"https://banner2.cleanpng.com/20180913/bqs/kisspng-clip-art-student-computer-icons-school-illustratio-5b9af2b9283992.3985997515368813371648.jpg",
    Name:"Ramesh",
    Rollno:4566,
  },
  {
    number:3,
    Image:"https://banner2.cleanpng.com/20180913/bqs/kisspng-clip-art-student-computer-icons-school-illustratio-5b9af2b9283992.3985997515368813371648.jpg",
    Name:"Mahesh",
    Rollno:4567,
  },
  {
    number:4,
    Image:"https://banner2.cleanpng.com/20180913/bqs/kisspng-clip-art-student-computer-icons-school-illustratio-5b9af2b9283992.3985997515368813371648.jpg",
    Name:"Kamlesh",
    Rollno:4568,
  }
]

function ManageStudent() {
  return (
    <div>
      <LeftBar/>
      <RightBar/>
        <Box as={'div'} ml={'13rem'}  height={'100vh'} mr={'13rem'} >

          <Flex mb={'2.5rem'} alignItems={'center'} pt={'2rem'} justifyContent={'space-between'} >
            <Box ml={'2rem'} fontSize={'2rem'} >
              
                Good Morning lorem!
              
            </Box>

            <Box mr={'2rem'} fontSize={'1rem'}>
              <select>
                <option>Select Class</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
              </select>
            </Box>
          </Flex>



{

  DummyData.map((dummy)=>{
    return(
      <Flex textAlign={'center'} _hover={{border:'1px solid grey',borderRadius:'1rem'}} alignItems={'center'} justifyContent={'space-between'}  pl={'2.5rem'} h={'4rem'}  >
            <Flex >
                  <Flex>{dummy.number}</Flex>
                  <Flex ml={'2rem'} >
                    <Image h={'2rem'} borderRadius={'5rem'} w={'3rem'} src={dummy.Image} />
                    </Flex>
                  <Flex ml={'2rem'} >{dummy.Name}</Flex>
                  <Flex ml={'4rem'} >{dummy.Rollno}</Flex>
            </Flex>
            <Flex>
                  <Flex mr={'2rem'} ><MdOutlineModeEdit/></Flex>
                  <Flex mr={'2rem'} ><RiDeleteBinLine/></Flex>
            </Flex>
          </Flex>
    )
  })

}
       
    
        </Box>
        </div>
 
  )
}

export default ManageStudent