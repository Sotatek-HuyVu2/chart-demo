import React from 'react';
import {DATA_GOOGLE_ANATYTICS} from "../constants";
import LineChart from "../components/chart/LineChart";

const data = DATA_GOOGLE_ANATYTICS

function Home() {
    return (
        <section className="flex flex-col justify-center antialiased text-gray-600 min-h-screen">
            <div className="mx-auto p-4 sm:px-6">
                <div className="p-5 pt-0 flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="">
                        <div className="flex justify-between gap-6">
                            <div className="tab-active flex items-center py-2">
                                <div className="mr-5 text-start">
                                    <div className="text-sm text-gray-500">Người dùng</div>
                                    <div className="text-3xl font-bold text-gray-800">24.7K</div>
                                    <div className="text-sm font-medium text-green-500">+49%</div>
                                </div>
                            </div>
                            <div className="flex items-center py-2">
                                <div className="mr-5 text-start">
                                    <div className="text-sm text-gray-500">
                                        Số người dùng mới
                                    </div>
                                    <div className="text-3xl font-bold text-gray-800">56.9K</div>
                                    <div className="text-sm font-medium text-green-500">+7%</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-5 text-start">
                                    <div className="text-sm text-gray-500">Thời gian tương tác trung bình</div>
                                    <div className="text-3xl font-bold text-gray-800">2m 56s</div>
                                    <div className="text-sm font-medium text-yellow-500">+7%</div>
                                </div>
                            </div>
                            <div className="flex items-center py-2">
                                <div className="mr-5 text-start">
                                    <div className="text-sm text-gray-500">
                                        Tổng doanh thu
                                    </div>
                                    <div className="text-3xl font-bold text-gray-800">1.000.000$</div>
                                    <div className="text-sm font-medium text-yellow-500">-7%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <LineChart data={data}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
