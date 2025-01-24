import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ReportPage() {
    const navigate = useNavigate();

    const checkUserToken = () => {
        let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

        if (userInfo) {
            axios.get("http://localhost:1337/api/frontend-users", {
                params: {
                    filters: {
                        documentId: {
                            $eq: userInfo.documentId,
                        },
                    },
                }
            }).then((res) => {
                if (res.data.data.length > 0) {
                    let userInfo = res.data.data[0];
                    if (userInfo.is_admin == true) {
                        navigate('/report')
                    } else {
                        navigate('/pos')
                    }
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            navigate('/');
        }


    }
    useEffect(() => {
        checkUserToken();
    }, []);

    return (
        <div>Report For Admins</div>
    )
}
