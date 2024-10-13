import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

    const [FirstName,setFirstName]=useState()
    const [LastName,setLastName]=useState()
    const [email,setEmail]=useState()
    const [password,setpassword]=useState()


	const [error, setError] = useState("");
	const navigate = useNavigate();



	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('',{FirstName,LastName,email,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={(e)=> setFirstName(e.target.value)}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={(e)=> setLastName(e.target.value)}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e)=> setEmail(e.target.value)}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e)=> setpassword(e.target.value)}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
                        <Link to="/">
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
                        </Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;