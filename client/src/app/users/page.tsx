"use client"

import { useGetUsersQuery } from '@/state/api'
import React from 'react'
import Header from '@/app/(components)/Header'
import { DataGrid } from '@mui/x-data-grid'
import { GridColDef } from '@mui/x-data-grid'
import { useAppSelector } from '../redux'

const columns: GridColDef[] = [
    {field: "userId", headerName: "ID", width:90},
    {field: "name", headerName: "Name", width:200},
    {field: "email", headerName: "Email", width: 200}
]

const Users = () => {
    const {data:users, isError, isLoading} = useGetUsersQuery()

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

    if(isLoading){
        return <div className='py-4'>Loading...</div>
    }

    if(isError || !users){
        return (
            <div className='text-center text-red-500 py-4'>
                Failed to fetch users
            </div>
        )
    }

  return (
    <div className="flex flex-col">
        <Header name="Users" />

        <DataGrid 
            rows={users}
            columns={columns}
            getRowId={(row) => row.userId}
            checkboxSelection
            className ={` !bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700`}
            sx={{ 
                "& .MuiDataGrid-row:hover": {
                    backgroundColor: "#0088FE",
                    color: "white"
                },
                "& .MuiDataGrid-columnHeader, & .MuiDataGrid-filler": {
                    backgroundColor: `${isDarkMode ? "#111827" : "#fff"} !important`,
                    color: `${isDarkMode ? "#fff" : "#000"}`,
                },
                "& .MuiDataGrid-checkboxInput, & .MuiDataGrid-footerContainer *": {
                    backgroundColor: `${isDarkMode ? "#000" : "#fff"}`,
                    color: `${isDarkMode ? "#fff" : "#000"}`,
                },
            }}
        />
    </div>
  )
}

export default Users