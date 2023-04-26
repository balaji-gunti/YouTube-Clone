import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Videos from './Videos';
import { fetchAPI } from '../utils/FetchAPI';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: '2'}} >
        <Typography variant= "h4" fontWeight= "bold" mb={2} sx={{color: 'white'}}>
          Search Results for: <span style={{ color: '#F31503'}} >
            {searchTerm}
          </span> {" "}
            videos
        </Typography>

        <Box display="flex" p="2" >
        <Box sx={{ mr: { sm: '100px'}}} />
          <Videos videos={videos} />

      </Box>
      </Box>
     
  )
}

export default SearchFeed