import React, { useEffect, useState } from 'react'
import Group from './components/Group'
import './App.css'
import axios from 'axios'
import Select from './components/Select'
import { getGroupedData, getPriorityLabel, getUserName } from './utils/format'

function App() {
  const [data, setData] = useState(null)
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status')
  const [orderBy, setOrderBy] = useState(localStorage.getItem('orderBy') || 'priority')
  const [groupedData, setGroupedData] = useState({})

  useEffect(() => {

    // Fetch data from the API
    const fetchData = async () => {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      setData(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Store groupBy and orderBy in localStorage
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('orderBy', orderBy);

  }, [groupBy, orderBy])

  useEffect(() => {
    if (data) {
      setGroupedData(getGroupedData(data, groupBy));
    }
  }, [data, groupBy]);

  const handleGroupChange = (key, value) => {
    if (key === 'groupBy') {
      setGroupBy(value);
    } else if (key === 'orderBy') {
      setOrderBy(value);
    }
  };

  return (
    <div className='app'>
      <div className='header'>
        <Select selectedGroupBy={ groupBy } selectedOrderBy={ orderBy } onChange={ handleGroupChange } />
      </div>
      <div className='group-container'>
        { Object.entries(groupedData).map(([key, tickets]) => (
          <Group
            key={ key }
            title={ groupBy === 'priority' ? getPriorityLabel(Number(key)) :
              groupBy === 'user' ? getUserName(data.users, key) :
                key }
            tickets={ tickets }
            orderBy={ orderBy }
            groupBy={ groupBy }
          />
        )) }
      </div>
    </div>
  )
}

export default App
