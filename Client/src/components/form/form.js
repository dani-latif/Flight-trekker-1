// import axios from 'axios'
// import { useState } from 'react'
// import Box from '@mui/material/Box'
// import Step from '@mui/material/Step'
// import Card from '@mui/material/Card'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import Stepper from '@mui/material/Stepper'
// import Container from '@mui/material/Container'
// import StepLabel from '@mui/material/StepLabel'
// import Typography from '@mui/material/Typography'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import FormControl from '@mui/material/FormControl'
// import CreatableSelect from 'react-select/creatable'
// import { ActionMeta, OnChangeValue } from 'react-select'
// import {
// 	FormLabel,
// 	Paper,
// 	RadioGroup,
// 	Skeleton,
// 	Stack,
// } from '@mui/material'

// const steps = [
// 	'Basic Info',
// 	'Socials',
// 	'Education Background',
// 	'Professional Details',
// 	'Choose Template',
// ]

// const FormComponent = ({ history }) => {
// 	const [activeStep, setActiveStep] = useState(0)
// 	const [skipped, setSkipped] = useState(new Set())
// 	const [selectedTemplate, setSelectedTemplate] = useState(1)
// 	const [basicInfoError, setBasicInfoError] = useState({
// 		age: '',
// 		email: '',
// 		gender: '',
// 		avatar: '',
// 		skills: '',
// 		address: '',
// 		lastName: '',
// 		location: '',
// 		firstName: '',
// 		profession: '',
// 		phoneNumber: '',
// 		description: '',
// 	})
// 	const [educationError, setEducationError] = useState([
// 		{
// 			degree: '',
// 			startDate: '',
// 			experience: '',
// 			institution: '',
// 			completionDate: '',
// 		},
// 		{
// 			degree: '',
// 			startDate: '',
// 			experience: '',
// 			institution: '',
// 			completionDate: '',
// 		},
// 		{
// 			degree: '',
// 			startDate: '',
// 			experience: '',
// 			institution: '',
// 			completionDate: '',
// 		},
// 	])
// 	const [professionalDetailError, setProfessionalDetailError] = useState([
// 		{
// 			jobTitle: '',
// 			leaveDate: '',
// 			startDate: '',
// 			experience: '',
// 			companyName: '',
// 		},
// 		{
// 			jobTitle: '',
// 			leaveDate: '',
// 			startDate: '',
// 			experience: '',
// 			companyName: '',
// 		},
// 		{
// 			jobTitle: '',
// 			leaveDate: '',
// 			startDate: '',
// 			experience: '',
// 			companyName: '',
// 		},
// 	])
// 	const [basicInfo, setBasicInfo] = useState({
// 		age: '',
// 		email: '',
// 		gender: '',
// 		avatar: '',
// 		skills: '',
// 		address: '',
// 		lastName: '',
// 		location: '',
// 		firstName: '',
// 		profession: '',
// 		phoneNumber: '',
// 		description: '',
// 	})
// 	const [socials, setSocials] = useState({
// 		github: '',
// 		linkedIn: '',
// 		portfolio: '',
// 	})
// 	const [educationDetail, setEducationDetail] = useState([
// 		{
// 			degree: '',
// 			startDate: '',
// 			experience: '',
// 			institution: '',
// 			completionDate: '',
// 		},
// 		{
// 			degree: '',
// 			startDate: '',
// 			experience: '',
// 			institution: '',
// 			completionDate: '',
// 		},
// 		{
// 			degree: '',
// 			startDate: '',
// 			experience: '',
// 			institution: '',
// 			completionDate: '',
// 		},
// 	])
// 	const [professionalDetail, setProfessionalDetail] = useState([
// 		{
// 			jobTitle: '',
// 			leaveDate: '',
// 			startDate: '',
// 			experience: '',
// 			companyName: '',
// 		},
// 		{
// 			jobTitle: '',
// 			leaveDate: '',
// 			startDate: '',
// 			experience: '',
// 			companyName: '',
// 		},
// 		{
// 			jobTitle: '',
// 			leaveDate: '',
// 			startDate: '',
// 			experience: '',
// 			companyName: '',
// 		},
// 	])

// 	const [skillsInputValue, setSkillsInputValue] = useState('')
// 	const numberRegex = /^[0-9]*$/
// 	const alphabetRegex = /^[a-zA-Z]*$/

// 	const basicInfoChangeHandler = e => {
// 		const { name, value } = e.target

// 		if (name === 'firstName' && numberRegex.test(value)) {
// 			setBasicInfoError({
// 				...basicInfoError,
// 				firstName: 'Only Alphabets Allowed',
// 			})
// 		} else if (name === 'lastName' && numberRegex.test(value)) {
// 			setBasicInfoError({
// 				...basicInfoError,
// 				lastName: 'Only Alphabets Allowed',
// 			})
// 		} else if (name === 'age' && alphabetRegex.test(value)) {
// 			setBasicInfoError({ ...basicInfoError, age: 'Only Numerics Allowed' })
// 		} else if (name === 'gender' && numberRegex.test(value)) {
// 			setBasicInfoError({ ...basicInfoError, gender: 'Only Alphabets Allowed' })
// 		} else if (name === 'location' && value === '') {
// 			setBasicInfoError({ ...basicInfoError, location: 'Location is Required' })
// 		} else if (name === 'email' && value === '') {
// 			setBasicInfoError({ ...basicInfoError, email: 'Email is Required' })
// 		} else if (name === 'phoneNumber' && alphabetRegex.test(value)) {
// 			setBasicInfoError({
// 				...basicInfoError,
// 				phoneNumber: 'Only Numerics Allowed',
// 			})
// 		}

// 		setBasicInfo({ ...basicInfo, [name]: value })
// 	}

// 	const socialsChangeHandler = e => {
// 		const { name, value } = e.target

// 		setSocials({ ...socials, [name]: value })
// 	}

// 	const educationDetailChangeHandler = e => {
// 		const { name, value } = e.target

// 		let tempEducationDetailArray = JSON.parse(JSON.stringify(educationDetail))

// 		if (e.target.dataset.flag === 'school') {
// 			tempEducationDetailArray[0][name] = value
// 		} else if (e.target.dataset.flag === 'college') {
// 			tempEducationDetailArray[1][name] = value
// 		} else if (e.target.dataset.flag === 'university') {
// 			tempEducationDetailArray[2][name] = value
// 		}

// 		setEducationDetail(tempEducationDetailArray)
// 	}

// 	const professionalDetailChangeHandler = e => {
// 		const { name, value } = e.target

// 		let temProfessionalDetailArray = JSON.parse(
// 			JSON.stringify(professionalDetail)
// 		)

// 		if (e.target.dataset.flag === 'firstJob') {
// 			temProfessionalDetailArray[0][name] = value
// 		} else if (e.target.dataset.flag === 'secondJob') {
// 			temProfessionalDetailArray[1][name] = value
// 		} else if (e.target.dataset.flag === 'thirdJob') {
// 			temProfessionalDetailArray[2][name] = value
// 		}

// 		setProfessionalDetail(temProfessionalDetailArray)
// 	}

// 	const isStepOptional = step => {
// 		return step === 1
// 	}

// 	const isStepSkipped = step => {
// 		return skipped.has(step)
// 	}

// 	const handleNext = () => {
// 		let newSkipped = skipped
// 		if (isStepSkipped(activeStep)) {
// 			newSkipped = new Set(newSkipped.values())
// 			newSkipped.delete(activeStep)
// 		}

// 		if (activeStep === steps.length - 1) handleUserResumeData()
// 		else {
// 			setActiveStep(prevActiveStep => prevActiveStep + 1)
// 			setSkipped(newSkipped)
// 		}
// 	}

// 	const handleBack = () => {
// 		setActiveStep(prevActiveStep => prevActiveStep - 1)
// 	}

// 	const handleSkip = () => {
// 		if (!isStepOptional(activeStep)) {
// 			// You probably want to guard against something like this,
// 			// it should never occur unless someone's actively trying to break something.
// 			throw new Error("You can't skip a step that isn't optional.")
// 		}

// 		setActiveStep(prevActiveStep => prevActiveStep + 1)
// 		setSkipped(prevSkipped => {
// 			const newSkipped = new Set(prevSkipped.values())
// 			newSkipped.add(activeStep)
// 			return newSkipped
// 		})
// 	}

// 	const handleReset = () => {
// 		setActiveStep(0)
// 	}

// 	const createOption = label => ({
// 		label,
// 		value: label,
// 	})

// 	// sum up all the information into one object
// 	const handleUserResumeData = () => {
// 		let skills = []

// 		basicInfo.skills.forEach(skill => skills.push(skill.value))
// 		// https://cv-generator-mern.herokuapp.com/api
// 		axios
// 			.post('http://localhost:3001/api', {
// 				avatar: basicInfo.avatar,
// 				userFirstName: basicInfo.firstName,
// 				userSecondName: basicInfo.lastName,
// 				userGender: basicInfo.gender,
// 				userAge: basicInfo.age,
// 				userProfession: basicInfo.profession,
// 				userLocation: basicInfo.location,
// 				userPhoneNumber: basicInfo.phoneNumber,
// 				userEmail: basicInfo.email,
// 				userHouseAddress: basicInfo.address,
// 				userProfileDescription: basicInfo.description,
// 				userFirstProfileWebsite: 'Github',
// 				userGitHubProfileName: socials.github,
// 				userSecondProfileWebsite: 'LinkedIn',
// 				userLinkedInProfileName: socials.linkedIn,
// 				userThirdProfileWebsite: 'Portfolio',
// 				userPersonalWebsiteLink: socials.portfolio,
// 				userHighSchoolDegreeName: educationDetail[0].degree,
// 				userHighSchoolName: educationDetail[0].institution,
// 				userHighSchoolStartingDate: educationDetail[0].startDate,
// 				userHighSchoolEndingDate: educationDetail[0].completionDate,
// 				userHighSchoolExperience: educationDetail[0].experience,
// 				userCollegeDegreeName: educationDetail[1].degree,
// 				userCollegeName: educationDetail[1].institution,
// 				userCollegeStartingDate: educationDetail[1].startDate,
// 				userCollegeEndingDate: educationDetail[1].completionDate,
// 				userCollegeExperience: educationDetail[1].experience,
// 				userBachelorDegreeName: educationDetail[2].degree,
// 				userUniversityName: educationDetail[2].institution,
// 				userBachelorStartingDate: educationDetail[2].startDate,
// 				userBachelorEndingDate: educationDetail[2].completionDate,
// 				userUniversityExperience: educationDetail[2].experience,
// 				user1stExperience: professionalDetail[0].jobTitle,
// 				user1stCompanyName: professionalDetail[0].companyName,
// 				user1stExperienceStartingDate: professionalDetail[0].startDate,
// 				user1stExperienceEndingDate: professionalDetail[0].leaveDate,
// 				user1stCompanyExperience: professionalDetail[0].experience,
// 				user2ndExperience: professionalDetail[1].jobTitle,
// 				user2ndCompanyName: professionalDetail[1].companyName,
// 				user2ndExperienceStartingDate: professionalDetail[1].startDate,
// 				user2ndExperienceEndingDate: professionalDetail[1].leaveDate,
// 				user2ndCompanyExperience: professionalDetail[1].experience,
// 				user3rdExperience: professionalDetail[2].jobTitle,
// 				user3rdCompanyName: professionalDetail[2].companyName,
// 				user3rdExperienceStartingDate: professionalDetail[2].startDate,
// 				user3rdExperienceEndingDate: professionalDetail[2].leaveDate,
// 				user3rdCompanyExperience: professionalDetail[2].experience,
// 				userSkills: skills,
// 			})
// 			.then(res => {
// 				if (res.data.success) {
// 					history.push({
// 						pathname: `/view_resume/${res.data.resumeData._id}`,
// 						state: { templateId: selectedTemplate },
// 					})
// 				}
// 			})
// 	}

// 	const handleChange = (value, actionMeta) => {
// 		console.group('Value Changed')
// 		console.log(value)
// 		console.log(`action: ${actionMeta.action}`)
// 		console.groupEnd()
// 		setBasicInfo({ ...basicInfo, skills: [value] })
// 	}

// 	const handleInputChange = inputValue => {
// 		setSkillsInputValue(inputValue)
// 	}

// 	const handleKeyDown = event => {
// 		// const { inputValue, value } = this.state
// 		if (!skillsInputValue) return
// 		switch (event.key) {
// 			case 'Enter':
// 				console.group('Value Added')
// 				console.log(basicInfo.skills)
// 				console.groupEnd()
// 				setSkillsInputValue('')

// 				setBasicInfo({
// 					...basicInfo,
// 					skills: [...basicInfo.skills, createOption(skillsInputValue)],
// 				})
// 				event.preventDefault()
// 				break
// 			default:
// 				return
// 		}
// 	}

// 	return (
// 		<Container
// 			className={`d-flex align-items-center justify-content-center ${
// 				activeStep === 0 || activeStep === 1 || activeStep === 4 ? 'vh-100' : ''
// 			}`}
// 		>
// 			<Card sx={{ width: '90vw' }}>
// 				<CardContent>
// 					<Box sx={{ width: '100%' }}>
// 						<Stepper activeStep={activeStep}>
// 							{steps.map((label, index) => {
// 								const stepProps = {}
// 								const labelProps = {}
// 								if (isStepSkipped(index)) {
// 									stepProps.completed = false
// 								}
// 								return (
// 									<Step key={label} {...stepProps}>
// 										<StepLabel {...labelProps}>{label}</StepLabel>
// 									</Step>
// 								)
// 							})}
// 						</Stepper>
// 					</Box>
// 					<Box>
// 						{activeStep === steps.length ? (
// 							<>
// 								<Typography sx={{ mt: 2, mb: 1 }}>
// 									All steps completed - you&apos;re finished
// 								</Typography>
// 								<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
// 									<Box sx={{ flex: '1 1 auto' }} />
// 									<Button onClick={handleReset}>Reset</Button>
// 								</Box>
// 							</>
// 						) : (
// 							<>
// 								{activeStep === 0 ? (
// 									<form
// 										style={{
// 											height: '100%',
// 											marginTop: '6%',
// 											alignItems: 'center',
// 											justifyContent: 'center',
// 										}}
// 									>
// 										<Box>
// 											<Box
// 												sx={{
// 													display: 'flex',
// 													alignItems: 'center',
// 													flexDirection: 'column',
// 													justifyContent: 'center',
// 												}}
// 											>
// 												<Avatar
// 													alt='Remy Sharp'
// 													src={basicInfo.avatar}
// 													sx={{ width: 200, height: 200 }}
// 												/>
// 												<label htmlFor='avatar'>
// 													<span style={{ cursor: 'pointer', fontSize: '18px' }}>
// 														Select Picture
// 													</span>
// 													<input
// 														type='file'
// 														id='avatar'
// 														name='avatar'
// 														accept='image/*'
// 														onChange={e => {
// 															const reader = new FileReader()
// 															reader.onload = function (readerEvent) {
// 																setBasicInfo({
// 																	...basicInfo,
// 																	avatar: readerEvent.target.result,
// 																})
// 															}
// 															reader.readAsDataURL(e.target.files[0])
// 														}}
// 														style={{ display: 'none' }}
// 													/>
// 												</label>
// 											</Box>
// 											<Box
// 												sx={{
// 													display: 'flex',
// 													flexDirection: 'row',
// 												}}
// 											>
// 												<div className='input-field flex-grow-1 me-3'>
// 													<label htmlFor='firstName' className='green-text'>
// 														First Name
// 													</label>
// 													<input
// 														required
// 														type='text'
// 														id='firstName'
// 														name='firstName'
// 														className='validate'
// 														value={basicInfo.firstName}
// 														onChange={basicInfoChangeHandler}
// 													/>
// 													{basicInfoError.firstName !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.firstName}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 												<div className='input-field flex-grow-1 me-3'>
// 													<label htmlFor='lastName' className='green-text'>
// 														Last Name
// 													</label>
// 													<input
// 														required
// 														type='text'
// 														id='lastName'
// 														name='lastName'
// 														className='validate'
// 														value={basicInfo.lastName}
// 														onChange={basicInfoChangeHandler}
// 													/>
// 													{basicInfoError.lastName !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.lastName}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 												<div className='input-field flex-grow-1'>
// 													<label htmlFor='profession' className='green-text'>
// 														Profession
// 													</label>
// 													<input
// 														required
// 														type='text'
// 														id='profession'
// 														name='profession'
// 														className='validate'
// 														value={basicInfo.profession}
// 														onChange={basicInfoChangeHandler}
// 													/>
// 													{basicInfoError.profession !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.profession}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 											</Box>
// 											<Box sx={{ display: 'flex', flexDirection: 'row' }}>
// 												<div className='input-field flex-grow-1 me-3'>
// 													<label htmlFor='age' className='green-text'>
// 														Age
// 													</label>
// 													<input
// 														required
// 														min={1}
// 														id='age'
// 														max={100}
// 														name='age'
// 														type='number'
// 														className='validate'
// 														value={basicInfo.age}
// 														onChange={basicInfoChangeHandler}
// 													/>
// 													{basicInfoError.age !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.age}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 												<div className='input-field flex-grow-1 me-3'>
// 													{/* <label htmlFor='gender' className='green-text'>
// 														Gender
// 													</label> */}
// 													{/* <div class='input-field col s12'> */}
// 													<select
// 														required
// 														id='gender'
// 														name='gender'
// 														value={basicInfo.gender}
// 														onChange={basicInfoChangeHandler}
// 													>
// 														<option value='' disabled selected>
// 															Choose your Gender
// 														</option>
// 														<option value='Male'>Male</option>
// 														<option value='Female'>Female</option>
// 														<option value='Other'>Other</option>
// 													</select>
// 													{/* <label htmlFor='gender' className='green-text'>
// 															Gender
// 														</label> */}
// 													{/* </div> */}
// 													{/* <input
// 														required
// 														type='text'
// 														id='gender'
// 														name='gender'
// 														className='validate'
// 														value={basicInfo.gender}
// 														onChange={basicInfoChangeHandler}
// 													/> */}
// 													{basicInfoError.gender !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.gender}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 												<div className='input-field flex-grow-1'>
// 													<label htmlFor='location' className='green-text'>
// 														Location
// 													</label>
// 													<input
// 														required
// 														type='text'
// 														id='location'
// 														name='location'
// 														className='validate'
// 														value={basicInfo.location}
// 														onChange={basicInfoChangeHandler}
// 													/>
// 													{basicInfoError.location !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.location}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 											</Box>
// 											<Box sx={{ display: 'flex', flexDirection: 'row' }}>
// 												<div className='input-field flex-grow-1 me-3'>
// 													<label htmlFor='email' className='green-text'>
// 														Email
// 													</label>
// 													<input
// 														required
// 														id='email'
// 														type='email'
// 														name='email'
// 														className='validate'
// 														value={basicInfo.email}
// 														onChange={basicInfoChangeHandler}
// 													/>
// 													{basicInfoError.email !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.email}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 												<div className='input-field flex-grow-1 me-3'>
// 													<label htmlFor='address' className='green-text'>
// 														Address
// 													</label>
// 													<input
// 														required
// 														type='text'
// 														id='address'
// 														name='address'
// 														className='validate'
// 														value={basicInfo.address}
// 														onChange={basicInfoChangeHandler}
// 													/>
// 													{basicInfoError.address !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.address}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 												<div className='input-field flex-grow-1'>
// 													<label htmlFor='phoneNumber' className='green-text'>
// 														Phone Number
// 													</label>
// 													<input
// 														required
// 														min={1}
// 														max={9999999}
// 														type='number'
// 														id='phoneNumber'
// 														name='phoneNumber'
// 														className='validate'
// 														value={basicInfo.phoneNumber}
// 														onChange={basicInfoChangeHandler}
// 													/>
// 													{basicInfoError.phoneNumber !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.phoneNumber}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 											</Box>
// 											<Box>
// 												<div className='input-field flex-grow-1'>
// 													<label htmlFor='skills' className='green-text'>
// 														Skills
// 													</label>
// 													<CreatableSelect
// 														isMulti
// 														isClearable
// 														menuIsOpen={false}
// 														onChange={handleChange}
// 														value={basicInfo.skills}
// 														onKeyDown={handleKeyDown}
// 														inputValue={skillsInputValue}
// 														onInputChange={handleInputChange}
// 														components={{ DropdownIndicator: null }}
// 														placeholder='Type Skill and press Enter...'
// 													/>
// 													{/* <input
// 														required
// 														type='text'
// 														id='skills'
// 														name='skills'
// 														className='validate'
// 														value={basicInfo.skills}
// 														onChange={basicInfoChangeHandler}
// 													/> */}
// 													{basicInfoError.skills !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.skills}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 											</Box>
// 											<Box>
// 												<div className='input-field flex-grow-1'>
// 													<label htmlFor='description' className='green-text'>
// 														Profile Description
// 													</label>
// 													<textarea
// 														required
// 														id='description'
// 														name='description'
// 														className='materialize-textarea validate'
// 														value={basicInfo.description}
// 														onChange={basicInfoChangeHandler}
// 													/>
// 													{basicInfoError.description !== '' ? (
// 														<p className='text-danger'>
// 															* {basicInfoError.description}
// 														</p>
// 													) : (
// 														<></>
// 													)}
// 												</div>
// 											</Box>
// 										</Box>
// 									</form>
// 								) : activeStep === 1 ? (
// 									<form
// 										style={{
// 											height: '100%',
// 											marginTop: '6%',
// 											alignItems: 'center',
// 											justifyContent: 'center',
// 										}}
// 									>
// 										<Box
// 											sx={{
// 												display: 'flex',
// 												alignItems: 'center',
// 												flexDirection: 'column',
// 												justifyContent: 'center',
// 											}}
// 										>
// 											<Box
// 												sx={{
// 													display: 'flex',
// 													flexDirection: 'row',
// 												}}
// 											>
// 												<i className='fab fa-linkedin fa-3x text-primary'></i>
// 												<input
// 													type='text'
// 													name='linkedIn'
// 													value={socials.linkedIn}
// 													onChange={socialsChangeHandler}
// 													placeholder='LinkedIn Profile URL'
// 												/>
// 											</Box>
// 											<Box
// 												sx={{
// 													display: 'flex',
// 													flexDirection: 'row',
// 												}}
// 											>
// 												<i className='fab fa-github fa-3x'></i>
// 												<input
// 													type='text'
// 													name='github'
// 													value={socials.github}
// 													placeholder='Github Profile URL'
// 													onChange={socialsChangeHandler}
// 												/>
// 											</Box>
// 											<Box
// 												sx={{
// 													display: 'flex',
// 													flexDirection: 'row',
// 												}}
// 											>
// 												<i className='fas fa-link fa-3x'></i>
// 												<input
// 													type='text'
// 													name='portfolio'
// 													placeholder='Portfolio'
// 													value={socials.portfolio}
// 													onChange={socialsChangeHandler}
// 												/>
// 											</Box>
// 										</Box>
// 									</form>
// 								) : activeStep === 2 ? (
// 									<form
// 										style={{
// 											height: '100%',
// 											marginTop: '6%',
// 											alignItems: 'center',
// 											justifyContent: 'center',
// 										}}
// 									>
// 										<Box
// 											sx={{
// 												display: 'flex',
// 												alignItems: 'stretch',
// 												flexDirection: 'column',
// 												justifyContent: 'center',
// 											}}
// 										>
// 											<Box
// 												sx={{
// 													flexGrow: '1',
// 													display: 'flex',
// 													flexDirection: 'column',
// 												}}
// 											>
// 												<Paper
// 													variant='outlined'
// 													sx={{
// 														p: 1,
// 														mb: 2,
// 														display: 'flex',
// 														flexDirection: 'column',
// 														justifyContent: 'center',
// 													}}
// 												>
// 													<Typography
// 														className='green-text'
// 														variant='h4'
// 														gutterBottom
// 														component='div'
// 													>
// 														School
// 													</Typography>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='degree' className='green-text'>
// 															Degree
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='degree'
// 															name='degree'
// 															data-flag='school'
// 															className='validate'
// 															value={educationDetail[0].degree}
// 															onChange={educationDetailChangeHandler}
// 														/>
// 														{educationError[0].degree !== '' ? (
// 															<p className='text-danger'>
// 																* {educationError[0].degree}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='institution' className='green-text'>
// 															Institution
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='institution'
// 															data-flag='school'
// 															name='institution'
// 															className='validate'
// 															value={educationDetail[0].institution}
// 															onChange={educationDetailChangeHandler}
// 														/>
// 														{educationError[0].institution !== '' ? (
// 															<p className='text-danger'>
// 																* {educationError[0].institution}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='d-flex flex-row'>
// 														<Box sx={{ flexGrow: 1, mr: 2 }}>
// 															<label htmlFor='startDate' className='green-text'>
// 																Start Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																id='startDate'
// 																name='startDate'
// 																data-flag='school'
// 																className='validate'
// 																value={educationDetail[0].startDate}
// 																max={educationDetail[0].completionDate}
// 																onChange={educationDetailChangeHandler}
// 															/>
// 															{educationError[0].startDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {educationError[0].startDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 														<Box sx={{ flexGrow: 1 }}>
// 															<label
// 																htmlFor='completionDate'
// 																className='green-text'
// 															>
// 																Completion Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																data-flag='school'
// 																id='completionDate'
// 																className='validate'
// 																name='completionDate'
// 																min={educationDetail[0].startDate}
// 																onChange={educationDetailChangeHandler}
// 																value={educationDetail[0].completionDate}
// 															/>
// 															{educationError[0].completionDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {educationError[0].completionDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='experience' className='green-text'>
// 															Experience
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='experience'
// 															name='experience'
// 															data-flag='school'
// 															className='validate'
// 															value={educationDetail[0].experience}
// 															onChange={educationDetailChangeHandler}
// 														/>
// 														{educationError[0].experience !== '' ? (
// 															<p className='text-danger'>
// 																* {educationError[0].experience}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 												</Paper>
// 												<Paper
// 													variant='outlined'
// 													sx={{
// 														p: 1,
// 														mb: 2,
// 														display: 'flex',
// 														flexDirection: 'column',
// 														jsutifyContent: 'center',
// 													}}
// 												>
// 													<Typography
// 														className='green-text'
// 														variant='h4'
// 														gutterBottom
// 														component='div'
// 													>
// 														College
// 													</Typography>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='degree' className='green-text'>
// 															Degree
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='degree'
// 															name='degree'
// 															data-flag='college'
// 															className='validate'
// 															value={educationDetail[1].degree}
// 															onChange={educationDetailChangeHandler}
// 														/>
// 														{educationError[1].degree !== '' ? (
// 															<p className='text-danger'>
// 																* {educationError[1].degree}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='institution' className='green-text'>
// 															Institution
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='institution'
// 															name='institution'
// 															data-flag='college'
// 															className='validate'
// 															value={educationDetail[1].institution}
// 															onChange={educationDetailChangeHandler}
// 														/>
// 														{educationError[1].institution !== '' ? (
// 															<p className='text-danger'>
// 																* {educationError[1].institution}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='d-flex flex-row'>
// 														<Box sx={{ flexGrow: 1, mr: 2 }}>
// 															<label htmlFor='startDate' className='green-text'>
// 																Start Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																id='startDate'
// 																name='startDate'
// 																data-flag='college'
// 																className='validate'
// 																value={educationDetail[1].startDate}
// 																max={educationDetail[1].completionDate}
// 																onChange={educationDetailChangeHandler}
// 															/>
// 															{educationError[1].startDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {educationError[1].startDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 														<Box sx={{ flexGrow: 1 }}>
// 															<label
// 																htmlFor='completionDate'
// 																className='green-text'
// 															>
// 																Completion Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																data-flag='college'
// 																id='completionDate'
// 																className='validate'
// 																name='completionDate'
// 																min={educationDetail[1].startDate}
// 																onChange={educationDetailChangeHandler}
// 																value={educationDetail[1].completionDate}
// 															/>
// 															{educationError[1].completionDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {educationError[1].completionDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='experience' className='green-text'>
// 															Experience
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='experience'
// 															name='experience'
// 															data-flag='college'
// 															className='validate'
// 															value={educationDetail[1].experience}
// 															onChange={educationDetailChangeHandler}
// 														/>
// 														{educationError[1].experience !== '' ? (
// 															<p className='text-danger'>
// 																* {educationError[1].experience}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 												</Paper>
// 												<Paper
// 													variant='outlined'
// 													sx={{
// 														p: 1,
// 														display: 'flex',
// 														flexDirection: 'column',
// 														jsutifyContent: 'center',
// 													}}
// 												>
// 													<Typography
// 														className='green-text'
// 														variant='h4'
// 														gutterBottom
// 														component='div'
// 													>
// 														University
// 													</Typography>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='degree' className='green-text'>
// 															Degree
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='degree'
// 															name='degree'
// 															data-flag='university'
// 															className='validate'
// 															value={educationDetail[2].degree}
// 															onChange={educationDetailChangeHandler}
// 														/>
// 														{educationError[2].degree !== '' ? (
// 															<p className='text-danger'>
// 																* {educationError[2].degree}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='institution' className='green-text'>
// 															Institution
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='institution'
// 															name='institution'
// 															className='validate'
// 															data-flag='university'
// 															value={educationDetail[2].institution}
// 															onChange={educationDetailChangeHandler}
// 														/>
// 														{educationError[2].institution !== '' ? (
// 															<p className='text-danger'>
// 																* {educationError[2].institution}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='d-flex flex-row'>
// 														<Box sx={{ flexGrow: 1, mr: 2 }}>
// 															<label htmlFor='startDate' className='green-text'>
// 																Start Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																id='startDate'
// 																name='startDate'
// 																className='validate'
// 																data-flag='university'
// 																value={educationDetail[2].startDate}
// 																max={educationDetail[2].completionDate}
// 																onChange={educationDetailChangeHandler}
// 															/>
// 															{educationError[2].startDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {educationError[2].startDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 														<Box sx={{ flexGrow: 1 }}>
// 															<label
// 																htmlFor='completionDate'
// 																className='green-text'
// 															>
// 																Completion Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																id='completionDate'
// 																className='validate'
// 																name='completionDate'
// 																data-flag='university'
// 																min={educationDetail[2].startDate}
// 																onChange={educationDetailChangeHandler}
// 																value={educationDetail[2].completionDate}
// 															/>
// 															{educationError[2].completionDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {educationError[2].completionDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='experience' className='green-text'>
// 															Experience
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='experience'
// 															name='experience'
// 															className='validate'
// 															data-flag='university'
// 															value={educationDetail[2].experience}
// 															onChange={educationDetailChangeHandler}
// 														/>
// 														{educationError[2].experience !== '' ? (
// 															<p className='text-danger'>
// 																* {educationError[2].experience}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 												</Paper>
// 											</Box>
// 										</Box>
// 									</form>
// 								) : activeStep === 3 ? (
// 									<form
// 										style={{
// 											height: '100%',
// 											marginTop: '6%',
// 											alignItems: 'center',
// 											justifyContent: 'center',
// 										}}
// 									>
// 										<Box
// 											sx={{
// 												display: 'flex',
// 												alignItems: 'stretch',
// 												flexDirection: 'column',
// 												justifyContent: 'center',
// 											}}
// 										>
// 											<Box
// 												sx={{
// 													flexGrow: '1',
// 													display: 'flex',
// 													flexDirection: 'column',
// 												}}
// 											>
// 												<Paper
// 													variant='outlined'
// 													sx={{
// 														p: 1,
// 														mb: 2,
// 														display: 'flex',
// 														flexDirection: 'column',
// 														justifyContent: 'center',
// 													}}
// 												>
// 													<Typography
// 														className='green-text'
// 														variant='h4'
// 														gutterBottom
// 														component='div'
// 													>
// 														First Job
// 													</Typography>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='companyName' className='green-text'>
// 															Company
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='companyName'
// 															name='companyName'
// 															data-flag='firstJob'
// 															className='validate'
// 															value={professionalDetail[0].companyName}
// 															onChange={professionalDetailChangeHandler}
// 														/>
// 														{professionalDetailError[0].companyName !== '' ? (
// 															<p className='text-danger'>
// 																* {professionalDetailError[0].companyName}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='jobTitle' className='green-text'>
// 															Job Title
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='jobTitle'
// 															name='jobTitle'
// 															data-flag='firstJob'
// 															className='validate'
// 															value={professionalDetail[0].jobTitle}
// 															onChange={professionalDetailChangeHandler}
// 														/>
// 														{professionalDetailError[0].jobTitle !== '' ? (
// 															<p className='text-danger'>
// 																* {professionalDetailError[0].jobTitle}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='d-flex flex-row'>
// 														<Box sx={{ flexGrow: 1, mr: 2 }}>
// 															<label htmlFor='startDate' className='green-text'>
// 																Start Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																id='startDate'
// 																name='startDate'
// 																data-flag='firstJob'
// 																className='validate'
// 																max={professionalDetail[0].leaveDate}
// 																value={professionalDetail[0].startDate}
// 																onChange={professionalDetailChangeHandler}
// 															/>
// 															{professionalDetailError[0].startDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {professionalDetailError[0].startDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 														<Box sx={{ flexGrow: 1 }}>
// 															<label htmlFor='leaveDate' className='green-text'>
// 																Leave Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																id='leaveDate'
// 																name='leaveDate'
// 																data-flag='firstJob'
// 																className='validate'
// 																min={professionalDetail[0].startDate}
// 																value={professionalDetail[0].leaveDate}
// 																onChange={professionalDetailChangeHandler}
// 															/>
// 															{professionalDetailError[0].leaveDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {professionalDetailError[0].leaveDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='experience' className='green-text'>
// 															Experience
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='experience'
// 															name='experience'
// 															data-flag='firstJob'
// 															className='validate'
// 															value={professionalDetail[0].experience}
// 															onChange={professionalDetailChangeHandler}
// 														/>
// 														{professionalDetailError[0].experience !== '' ? (
// 															<p className='text-danger'>
// 																* {professionalDetailError[0].experience}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 												</Paper>
// 												<Paper
// 													variant='outlined'
// 													sx={{
// 														p: 1,
// 														mb: 2,
// 														display: 'flex',
// 														flexDirection: 'column',
// 														jsutifyContent: 'center',
// 													}}
// 												>
// 													<Typography
// 														className='green-text'
// 														variant='h4'
// 														gutterBottom
// 														component='div'
// 													>
// 														Second Job
// 													</Typography>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='companyName' className='green-text'>
// 															Company
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='companyName'
// 															name='companyName'
// 															className='validate'
// 															data-flag='secondJob'
// 															value={professionalDetail[1].companyName}
// 															onChange={professionalDetailChangeHandler}
// 														/>
// 														{professionalDetailError[1].companyName !== '' ? (
// 															<p className='text-danger'>
// 																* {professionalDetailError[1].companyName}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='jobTitle' className='green-text'>
// 															Job Title
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='jobTitle'
// 															name='jobTitle'
// 															className='validate'
// 															data-flag='secondJob'
// 															value={professionalDetail[1].jobTitle}
// 															onChange={professionalDetailChangeHandler}
// 														/>
// 														{professionalDetailError[1].jobTitle !== '' ? (
// 															<p className='text-danger'>
// 																* {professionalDetailError[1].jobTitle}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='d-flex flex-row'>
// 														<Box sx={{ flexGrow: 1, mr: 2 }}>
// 															<label htmlFor='startDate' className='green-text'>
// 																Start Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																id='startDate'
// 																name='startDate'
// 																className='validate'
// 																data-flag='secondJob'
// 																max={professionalDetail[1].leaveDate}
// 																value={professionalDetail[1].startDate}
// 																onChange={professionalDetailChangeHandler}
// 															/>
// 															{professionalDetailError[1].startDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {professionalDetailError[1].startDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 														<Box sx={{ flexGrow: 1 }}>
// 															<label htmlFor='leaveDate' className='green-text'>
// 																Leave Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																id='leaveDate'
// 																name='leaveDate'
// 																className='validate'
// 																data-flag='secondJob'
// 																min={professionalDetail[1].startDate}
// 																value={professionalDetail[1].leaveDate}
// 																onChange={professionalDetailChangeHandler}
// 															/>
// 															{professionalDetailError[1].leaveDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {professionalDetailError[1].leaveDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='experience' className='green-text'>
// 															Experience
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='experience'
// 															name='experience'
// 															data-flag='secondJob'
// 															className='validate'
// 															value={professionalDetail[1].experience}
// 															onChange={professionalDetailChangeHandler}
// 														/>
// 														{professionalDetailError[1].experience !== '' ? (
// 															<p className='text-danger'>
// 																* {professionalDetailError[1].experience}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 												</Paper>
// 												<Paper
// 													variant='outlined'
// 													sx={{
// 														p: 1,
// 														display: 'flex',
// 														flexDirection: 'column',
// 														jsutifyContent: 'center',
// 													}}
// 												>
// 													<Typography
// 														className='green-text'
// 														variant='h4'
// 														gutterBottom
// 														component='div'
// 													>
// 														Third Job
// 													</Typography>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='companyName' className='green-text'>
// 															Company
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='companyName'
// 															name='companyName'
// 															className='validate'
// 															data-flag='thirdJob'
// 															value={professionalDetail[2].companyName}
// 															onChange={professionalDetailChangeHandler}
// 														/>
// 														{professionalDetailError[2].companyName !== '' ? (
// 															<p className='text-danger'>
// 																* {professionalDetailError[2].companyName}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='jobTitle' className='green-text'>
// 															Job Title
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='jobTitle'
// 															name='jobTitle'
// 															className='validate'
// 															data-flag='thirdJob'
// 															value={professionalDetail[2].jobTitle}
// 															onChange={professionalDetailChangeHandler}
// 														/>
// 														{professionalDetailError[2].jobTitle !== '' ? (
// 															<p className='text-danger'>
// 																* {professionalDetailError[2].jobTitle}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 													<div className='d-flex flex-row'>
// 														<Box sx={{ flexGrow: 1, mr: 2 }}>
// 															<label htmlFor='startDate' className='green-text'>
// 																Start Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																id='startDate'
// 																name='startDate'
// 																className='validate'
// 																data-flag='thirdJob'
// 																max={professionalDetail[2].leaveDate}
// 																value={professionalDetail[2].startDate}
// 																onChange={professionalDetailChangeHandler}
// 															/>
// 															{professionalDetailError[2].startDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {professionalDetailError[2].startDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 														<Box sx={{ flexGrow: 1 }}>
// 															<label htmlFor='leaveDate' className='green-text'>
// 																Leave Date
// 															</label>
// 															<input
// 																required
// 																type='date'
// 																id='leaveDate'
// 																name='leaveDate'
// 																className='validate'
// 																data-flag='thirdJob'
// 																min={professionalDetail[2].startDate}
// 																value={professionalDetail[2].leaveDate}
// 																onChange={professionalDetailChangeHandler}
// 															/>
// 															{professionalDetailError[0].leaveDate !== '' ? (
// 																<p className='text-danger'>
// 																	* {professionalDetailError[0].leaveDate}
// 																</p>
// 															) : (
// 																<></>
// 															)}
// 														</Box>
// 													</div>
// 													<div className='input-field flex-grow-1'>
// 														<label htmlFor='experience' className='green-text'>
// 															Experience
// 														</label>
// 														<input
// 															required
// 															type='text'
// 															id='experience'
// 															name='experience'
// 															data-flag='thirdJob'
// 															className='validate'
// 															onChange={professionalDetailChangeHandler}
// 															value={professionalDetail[2].experience}
// 														/>
// 														{professionalDetailError[2].experience !== '' ? (
// 															<p className='text-danger'>
// 																* {professionalDetailError[2].experience}
// 															</p>
// 														) : (
// 															<></>
// 														)}
// 													</div>
// 												</Paper>
// 											</Box>
// 										</Box>
// 									</form>
// 								) : activeStep === 4 ? (
// 									<FormControl
// 										sx={{
// 											mt: 2,
// 											display: 'flex',
// 											alignItems: 'center',
// 											justifyContent: 'center',
// 										}}
// 									>
// 										<FormLabel id='demo-radio-buttons-group-label'>
// 											Choose Template
// 										</FormLabel>
// 										<RadioGroup
// 											sx={{
// 												mt: 2,
// 												display: 'flex',
// 												flexDirection: 'row',
// 											}}
// 										>
// 											<Card
// 												sx={{
// 													p: 1,
// 													mr: 2,
// 													cursor: 'pointer',
// 													border: '2px solid',
// 													borderColor:
// 														selectedTemplate === 1 ? '#9ef01a' : '#979dac',
// 													backgroundColor:
// 														selectedTemplate === 1 ? '#c7f9cc' : '',
// 												}}
// 												onClick={() => setSelectedTemplate(1)}
// 											>
// 												<Stack
// 													sx={{
// 														flexDirection: 'row',
// 														alignItems: 'center',
// 													}}
// 												>
// 													<Skeleton
// 														width={50}
// 														height={60}
// 														animation={false}
// 														sx={{ flexGrow: '1' }}
// 													/>
// 													<Stack
// 														sx={{
// 															ml: 1,
// 															alignItems: 'center',
// 															flexDirection: 'column',
// 															flexGrow: '1',
// 														}}
// 													>
// 														<Skeleton
// 															width={100}
// 															height={20}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={100}
// 															height={20}
// 															animation={false}
// 														/>
// 													</Stack>
// 												</Stack>
// 												<Stack
// 													sx={{
// 														flexDirection: 'row',
// 														alignItems: 'flex-start',
// 														justifyContent: 'flex-start',
// 													}}
// 												>
// 													<Skeleton width={160} height={50} animation={false} />
// 												</Stack>
// 												<Stack
// 													sx={{
// 														display: 'flex',
// 														flexDirection: 'row',
// 														justifyContent: 'space-between',
// 													}}
// 												>
// 													<Stack
// 														sx={{
// 															mr: 1,
// 															flexWrap: 'wrap',
// 															display: 'inline-flex',
// 															flexDirection: 'column',
// 															alignItems: 'stretch',
// 														}}
// 													>
// 														<Skeleton
// 															width={70}
// 															height={50}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={70}
// 															height={30}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={70}
// 															height={40}
// 															animation={false}
// 														/>
// 														<Stack
// 															sx={{
// 																mt: 1,
// 																flexDirection: 'row',
// 																justifyContent: 'space-between',
// 															}}
// 														>
// 															<Stack
// 																sx={{
// 																	flexDirection: 'column',
// 																}}
// 															>
// 																<Skeleton
// 																	width={20}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={30}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={40}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={30}
// 																	height={10}
// 																	animation={false}
// 																/>
// 															</Stack>
// 														</Stack>
// 														<Stack
// 															sx={{
// 																mt: 1,
// 																flexDirection: 'row',
// 																justifyContent: 'space-between',
// 															}}
// 														>
// 															<Stack
// 																sx={{
// 																	flexDirection: 'column',
// 																}}
// 															>
// 																<Skeleton
// 																	width={20}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={30}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={40}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={30}
// 																	height={10}
// 																	animation={false}
// 																/>
// 															</Stack>
// 														</Stack>
// 														<Stack
// 															sx={{
// 																mt: 1,
// 																flexDirection: 'row',
// 																justifyContent: 'space-between',
// 															}}
// 														>
// 															<Stack
// 																sx={{
// 																	flexDirection: 'column',
// 																}}
// 															>
// 																<Skeleton
// 																	width={20}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={30}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={40}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={30}
// 																	height={10}
// 																	animation={false}
// 																/>
// 															</Stack>
// 														</Stack>
// 													</Stack>
// 													<Stack
// 														sx={{ display: 'flex', flexDirection: 'column' }}
// 													>
// 														<Skeleton
// 															width={70}
// 															height={60}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={70}
// 															height={60}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={70}
// 															height={60}
// 															animation={false}
// 														/>
// 													</Stack>
// 												</Stack>
// 											</Card>
// 											<Card
// 												outlined
// 												sx={{
// 													mr: 2,
// 													p: 1,
// 													cursor: 'pointer',
// 													border: '2px solid',
// 													borderColor:
// 														selectedTemplate === 2 ? '#9ef01a' : '#979dac',
// 													backgroundColor:
// 														selectedTemplate === 2 ? '#c7f9cc' : '',
// 												}}
// 												onClick={() => setSelectedTemplate(2)}
// 											>
// 												<Stack
// 													sx={{
// 														flexDirection: 'row',
// 														alignItems: 'center',
// 														justifyContent: 'space-evenly',
// 													}}
// 												>
// 													<Skeleton
// 														width={50}
// 														height={60}
// 														sx={{ mr: 2 }}
// 														animation={false}
// 													/>
// 													<Stack
// 														sx={{
// 															ml: 1,
// 															alignItems: 'flex-start',
// 															flexDirection: 'column',
// 														}}
// 													>
// 														<Skeleton
// 															width={30}
// 															height={10}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={40}
// 															height={10}
// 															animation={false}
// 														/>
// 														<Stack sx={{ flexDirection: 'row' }}>
// 															<Skeleton
// 																sx={{
// 																	mr: 1,
// 																}}
// 																width={20}
// 																height={10}
// 																animation={false}
// 															/>
// 															<Skeleton
// 																width={30}
// 																height={10}
// 																animation={false}
// 															/>
// 														</Stack>
// 													</Stack>
// 												</Stack>
// 												<Stack
// 													sx={{
// 														flexDirection: 'row',
// 														alignItems: 'flex-start',
// 														justifyContent: 'flex-start',
// 													}}
// 												>
// 													<Skeleton width={160} height={50} animation={false} />
// 												</Stack>
// 												<Stack
// 													sx={{
// 														display: 'flex',
// 														flexDirection: 'row',
// 														justifyContent: 'space-between',
// 													}}
// 												>
// 													<Stack
// 														sx={{
// 															mr: 1,
// 															flexWrap: 'wrap',
// 															display: 'inline-flex',
// 															flexDirection: 'column',
// 															alignItems: 'stretch',
// 														}}
// 													>
// 														<Skeleton
// 															width={50}
// 															height={25}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={50}
// 															height={30}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={50}
// 															height={60}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={50}
// 															height={60}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={50}
// 															height={60}
// 															animation={false}
// 														/>
// 													</Stack>
// 													<Stack
// 														sx={{
// 															flexDirection: 'column',
// 														}}
// 													>
// 														<Skeleton
// 															width={100}
// 															height={10}
// 															animation={false}
// 														/>

// 														<Stack
// 															sx={{
// 																mt: 1,
// 																flexDirection: 'row',
// 																justifyContent: 'space-between',
// 															}}
// 														>
// 															<Stack
// 																sx={{
// 																	flexDirection: 'column',
// 																}}
// 															>
// 																<Skeleton
// 																	width={20}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={30}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={40}
// 																	height={10}
// 																	animation={false}
// 																/>
// 															</Stack>
// 															<Skeleton
// 																width={30}
// 																height={10}
// 																animation={false}
// 															/>
// 														</Stack>
// 														<Stack
// 															sx={{
// 																mt: 1,
// 																flexDirection: 'row',
// 																justifyContent: 'space-between',
// 															}}
// 														>
// 															<Stack
// 																sx={{
// 																	flexDirection: 'column',
// 																}}
// 															>
// 																<Skeleton
// 																	width={20}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={30}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={40}
// 																	height={10}
// 																	animation={false}
// 																/>
// 															</Stack>
// 															<Skeleton
// 																width={30}
// 																height={10}
// 																animation={false}
// 															/>
// 														</Stack>
// 														<Stack
// 															sx={{
// 																mt: 1,
// 																flexDirection: 'row',
// 																justifyContent: 'space-between',
// 															}}
// 														>
// 															<Stack
// 																sx={{
// 																	flexDirection: 'column',
// 																}}
// 															>
// 																<Skeleton
// 																	width={20}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={30}
// 																	height={10}
// 																	animation={false}
// 																/>
// 																<Skeleton
// 																	width={40}
// 																	height={10}
// 																	animation={false}
// 																/>
// 															</Stack>
// 															<Skeleton
// 																width={30}
// 																height={10}
// 																animation={false}
// 															/>
// 														</Stack>
// 													</Stack>
// 												</Stack>
// 											</Card>
// 											<Card
// 												outlined
// 												sx={{
// 													mr: 2,
// 													p: 1,
// 													cursor: 'pointer',
// 													border: '2px solid',
// 													borderColor:
// 														selectedTemplate === 3 ? '#9ef01a' : '#979dac',
// 													backgroundColor:
// 														selectedTemplate === 3 ? '#c7f9cc' : '',
// 												}}
// 												onClick={() => setSelectedTemplate(3)}
// 											>
// 												<Stack
// 													sx={{
// 														flexDirection: 'row',
// 														alignItems: 'center',
// 													}}
// 												>
// 													<Skeleton width={50} height={60} animation={false} />
// 													<Stack
// 														sx={{
// 															ml: 1,
// 															alignItems: 'flex-start',
// 															flexDirection: 'column',
// 														}}
// 													>
// 														<Skeleton
// 															width={30}
// 															height={10}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={40}
// 															height={10}
// 															animation={false}
// 														/>
// 														<Stack sx={{ flexDirection: 'row' }}>
// 															<Skeleton
// 																sx={{
// 																	mr: 1,
// 																}}
// 																width={20}
// 																height={10}
// 																animation={false}
// 															/>
// 															<Skeleton
// 																sx={{
// 																	mr: 1,
// 																}}
// 																width={30}
// 																height={10}
// 																animation={false}
// 															/>
// 															<Skeleton
// 																width={20}
// 																height={10}
// 																animation={false}
// 															/>
// 														</Stack>
// 													</Stack>
// 												</Stack>
// 												<Stack
// 													sx={{
// 														flexDirection: 'row',
// 														alignItems: 'flex-start',
// 													}}
// 												>
// 													<Skeleton width={160} height={50} animation={false} />
// 												</Stack>
// 												<Stack
// 													sx={{
// 														display: 'flex',
// 														flexDirection: 'row',
// 													}}
// 												>
// 													<Skeleton
// 														width={76}
// 														height={20}
// 														sx={{ mr: 1 }}
// 														animation={false}
// 													/>
// 													<Skeleton width={76} height={20} animation={false} />
// 												</Stack>
// 												<Stack
// 													sx={{
// 														display: 'flex',
// 														flexDirection: 'row',
// 														justifyContent: 'space-between',
// 													}}
// 												>
// 													<Stack
// 														sx={{
// 															flexDirection: 'row',
// 														}}
// 													>
// 														<Skeleton
// 															width={10}
// 															height={10}
// 															sx={{ mr: 1 }}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={10}
// 															height={10}
// 															sx={{ mr: 1 }}
// 															animation={false}
// 														/>
// 														<Skeleton
// 															width={25}
// 															height={10}
// 															sx={{ mr: 1 }}
// 															animation={false}
// 														/>
// 													</Stack>
// 													<Skeleton width={76} height={10} animation={false} />
// 												</Stack>
// 												<Stack
// 													sx={{
// 														display: 'flex',
// 														flexDirection: 'row',
// 														justifyContent: 'space-evenly',
// 													}}
// 												>
// 													<Skeleton
// 														width={44}
// 														height={50}
// 														sx={{ mr: 1 }}
// 														animation={false}
// 													/>
// 													<Skeleton
// 														width={44}
// 														height={50}
// 														sx={{ mr: 1 }}
// 														animation={false}
// 													/>
// 													<Skeleton width={44} height={50} animation={false} />
// 												</Stack>
// 												<Stack
// 													sx={{
// 														display: 'flex',
// 														flexDirection: 'column',
// 														justifyContent: 'space-evenly',
// 													}}
// 												>
// 													<Skeleton width={160} height={10} animation={false} />
// 													<Stack
// 														sx={{
// 															flexDirection: 'row',
// 															justifyContent: 'space-between',
// 														}}
// 													>
// 														<Stack
// 															sx={{
// 																flexDirection: 'column',
// 															}}
// 														>
// 															<Skeleton
// 																width={10}
// 																height={10}
// 																animation={false}
// 															/>
// 															<Skeleton
// 																width={20}
// 																height={10}
// 																animation={false}
// 															/>
// 															<Skeleton
// 																width={30}
// 																height={10}
// 																animation={false}
// 															/>
// 														</Stack>
// 														<Skeleton
// 															sx={{
// 																mt: 1,
// 															}}
// 															width={60}
// 															height={10}
// 															animation={false}
// 														/>
// 													</Stack>
// 													<Stack
// 														sx={{
// 															mt: 1,
// 															flexDirection: 'row',
// 															justifyContent: 'space-between',
// 														}}
// 													>
// 														<Stack
// 															sx={{
// 																flexDirection: 'column',
// 															}}
// 														>
// 															<Skeleton
// 																width={10}
// 																height={10}
// 																animation={false}
// 															/>
// 															<Skeleton
// 																width={20}
// 																height={10}
// 																animation={false}
// 															/>
// 															<Skeleton
// 																width={30}
// 																height={10}
// 																animation={false}
// 															/>
// 														</Stack>
// 														<Skeleton
// 															sx={{
// 																mt: 1,
// 															}}
// 															width={60}
// 															height={10}
// 															animation={false}
// 														/>
// 													</Stack>
// 													<Stack
// 														sx={{
// 															mt: 1,
// 															flexDirection: 'row',
// 															justifyContent: 'space-between',
// 														}}
// 													>
// 														<Stack
// 															sx={{
// 																flexDirection: 'column',
// 															}}
// 														>
// 															<Skeleton
// 																width={10}
// 																height={10}
// 																animation={false}
// 															/>
// 															<Skeleton
// 																width={20}
// 																height={10}
// 																animation={false}
// 															/>
// 															<Skeleton
// 																width={30}
// 																height={10}
// 																animation={false}
// 															/>
// 														</Stack>
// 														<Skeleton
// 															sx={{
// 																mt: 1,
// 															}}
// 															width={60}
// 															height={10}
// 															animation={false}
// 														/>
// 													</Stack>
// 												</Stack>
// 											</Card>
// 										</RadioGroup>
// 									</FormControl>
// 								) : (
// 									<></>
// 								)}
// 							</>
// 						)}
// 					</Box>
// 				</CardContent>
// 				<CardActions sx={{ display: 'flex', alignItems: 'flex-end' }}>
// 					{activeStep === steps.length ? (
// 						<Box
// 							sx={{
// 								pt: 2,
// 								width: '100%',
// 								display: 'flex',
// 								flexDirection: 'row',
// 								alignItems: 'center',
// 								justifyContent: 'space-between',
// 							}}
// 						>
// 							<Button
// 								sx={{ mr: 1 }}
// 								color='inherit'
// 								onClick={handleBack}
// 								disabled={activeStep === 0}
// 							>
// 								Back
// 							</Button>
// 						</Box>
// 					) : (
// 						<Box
// 							sx={{
// 								pt: 2,
// 								width: '100%',
// 								display: 'flex',
// 								flexDirection: 'row',
// 								alignItems: 'center',
// 								justifyContent: 'space-between',
// 							}}
// 						>
// 							<Button
// 								sx={{ mr: 1 }}
// 								color='inherit'
// 								onClick={handleBack}
// 								disabled={activeStep === 0}
// 							>
// 								Back
// 							</Button>
// 							<Box sx={{ flex: '1 1 auto' }} />
// 							{isStepOptional(activeStep) && (
// 								<Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
// 									Skip
// 								</Button>
// 							)}

// 							<Button
// 								onClick={handleNext}
// 								// disabled={
// 								// 	basicInfoError.firstName !== '' ||
// 								// 	basicInfoError.lastName !== '' ||
// 								// 	basicInfoError.age !== '' ||
// 								// 	basicInfoError.gender !== '' ||
// 								// 	basicInfoError.location !== '' ||
// 								// 	basicInfoError.email !== '' ||
// 								// 	basicInfoError.address !== '' ||
// 								// 	basicInfoError.phoneNumber !== '' ||
// 								// 	basicInfoError.skills !== '' ||
// 								// 	educationDetail[0].degree === '' ||
// 								// 	educationDetail[0].institution === '' ||
// 								// 	educationDetail[0].experience === '' ||
// 								// 	educationDetail[0].startDate === '' ||
// 								// 	educationDetail[0].completionDate === '' ||
// 								// 	educationDetail[1].degree === '' ||
// 								// 	educationDetail[1].institution === '' ||
// 								// 	educationDetail[1].experience === '' ||
// 								// 	educationDetail[1].startDate === '' ||
// 								// 	educationDetail[1].completionDate === '' ||
// 								// 	educationDetail[2].degree === '' ||
// 								// 	educationDetail[2].institution === '' ||
// 								// 	educationDetail[2].experience === '' ||
// 								// 	educationDetail[2].startDate === '' ||
// 								// 	educationDetail[2].completionDate === ''
// 								// }
// 							>
// 								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
// 							</Button>
// 						</Box>
// 					)}
// 				</CardActions>
// 			</Card>
// 		</Container>
// 	)
// }

// export default FormComponent