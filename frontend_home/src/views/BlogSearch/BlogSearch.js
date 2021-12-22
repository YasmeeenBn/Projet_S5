import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import InputSearch from '../../components/InputSearch' ;
import { Breadcrumb, Newsletter, Result } from './components';

import { result } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionBreadcrumb: {
    '& .section-alternate__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}));

const BlogSearch = () => {
  const classes = useStyles();
  const [notes , setNewNotes] = useState(null)
  const [searchText, setSearchText] = useState("");

  // const { searchdata } = useInfiniteQuery([searchText], search);

    useEffect(() => {
      getNotes()
        } ,[])
  function getNotes() {
      axios({
          method: "GET",
          url:"http://127.0.0.1:8000/articles/",
          params: {
              _limit: 10
          }

        }).then((response)=>{
          const data = response.data
          setNewNotes(data)
        }).catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}


    return (
      <div className={classes.root}>
      <InputSearch
          setSearchText={setSearchText}
          searchText={searchText}
          placeholder={`Search for projects`}
      />
 
                <Result data={notes} />

      </div>
    );
  
};

export default BlogSearch;
