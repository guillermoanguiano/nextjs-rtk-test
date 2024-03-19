"use client"

import { useGetUsersQuery } from "@/redux/api/userApi";

const Users = () => {

  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

  if ( isLoading || isFetching ) return <p className="mt-10">Loading...</p>
  if (error) return <p className="mt-10">something went bad!, please try it again!</p>

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10">
      {
        data?.map( user => (
          <li className="bg-gray-900 p-3 rounded-lg space-y-2 text-center" key={user.id}>
            <h3><span className="font-bold">Name: </span> <br /> {user.name} </h3>
            <p><span className="font-bold">Email: </span> <br />{user.email}</p>
          </li>
        ))
      }
    </ul>
  )
}

export default Users