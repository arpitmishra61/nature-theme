import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { backendUrl } from '../config'
import { setUserDetails } from '../actions/userAction'
const getInfo = async (setUserDetails) => {
    let data = []
    for (let i = 99; i <= 111; i++) {
        try {
            const response = await axios.get(`${backendUrl.replace("number", i)}`)
            console.log(response.data)
            data.push(response.data)

        }
        catch (err) {
            console.log("can't fetch")
        }
    }

    setUserDetails(data)
}

const displayUsers = (user) => {
    return user.data.map(user => {


        return <div key={user.id} className="card p-2">
            <div className="card-overlay">
                <a href={user.download_url} download target="_blank" rel="noopener noreferrer">
                    <i className="material-icons"> get_app</i>
                </a>

            </div>
            <h5>{user.author}</h5>
            <img src={user.download_url} alt={`author-${user.id}`} height="100px" width="100px" />

        </div>
    })

}

function UserInfo(props) {
    const user = props.user
    useEffect(() => {
        getInfo(props.setUserDetails)

    }, [props.setUserDetails])


    return (
        <div className="mainSection">

            {user.status === "loading" ? <img src={require("../images/loading.gif")} alt="loading" /> : user.data.length === 0 ? <h3 className="no-data">No data</h3> : displayUsers(user)}

        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.userInfo
})

export default connect(mapStateToProps, { setUserDetails })(UserInfo)
