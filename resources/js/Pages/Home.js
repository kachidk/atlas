import React from 'react';
import Layout from '../layouts/Layout';


function Home() {

    return (
        <div>
            <Layout>
                {/* check app.css for related css */}
                <div className="header">
                    <h1 className="header-text">Dashboard</h1>
                </div>

                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        You're logged in!
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Home
