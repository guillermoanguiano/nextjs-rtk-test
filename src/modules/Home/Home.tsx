"use client";
import Users from "@/components/Users";
import { useGetUsersQuery } from "@/redux/api/userApi";
import { decrement, increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Home = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="w-[1920px] max-w-[100%] flex flex-col items-center mt-3">
      <div className="text-center">
        <h1>total: {count}</h1>

        <div className="space-x-2 mt-10">
          <button
            className="px-3 py-2 font-bold bg-blue-500 rounded-lg"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="px-3 py-2 font-bold bg-red-500 rounded-lg"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>

      <Users />
    </div>
  );
};

export default Home;
