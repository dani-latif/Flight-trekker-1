// import React from 'react'
// import {
// 	Page,
// 	Text,
// 	View,
// 	Font,
// 	Image,
// 	Link,
// 	Document,
// 	StyleSheet,
// } from '@react-pdf/renderer'
// import EducationInfoSection from './EducationInfoSection'
// import ProfessionalInfoSection from './ProfessionalInfoSection'

// Font.register({
// 	family: 'Roboto',
// 	// src: '/assets/font/MartelSans-Regular.ttf',
// 	fonts: [
// 		{ src: '/assets/font/OpenSans-Bold.ttf', fontWeight: 500 },
// 		{ src: '/assets/font/OpenSans-Light.ttf', fontWeight: 200 },
// 		{ src: '/assets/font/OpenSans-Regular.ttf', fontWeight: 300 },
// 	],
// })

// const styles = StyleSheet.create({
// 	body: {
// 		flexDirection: 'column',
// 		fontFamily: 'Roboto',
// 	},
// 	title: {
// 		fontSize: 27,
// 		paddingBottom: 5,
// 		textAlign: 'left',
// 		fontFamily: 'Roboto',
// 	},
// 	author: {
// 		fontSize: 16,
// 		paddingBottom: 5,
// 		textAlign: 'left',
// 	},
// 	subtitle: {
// 		fontSize: 10,
// 		fontFamily: 'Roboto',
// 		flexDirection: 'column',
// 		justifyContent: 'space-evenly',
// 	},
// 	text: {
// 		margin: 12,
// 		fontSize: 14,
// 		textAlign: 'justify',
// 		// fontFamily: 'Times-Roman',
// 	},
// 	image: {
// 		marginVertical: 15,
// 		marginHorizontal: 100,
// 	},
// 	header: {
// 		fontSize: 12,
// 		color: 'grey',
// 		marginBottom: 20,
// 		textAlign: 'center',
// 	},
// 	pageNumber: {
// 		left: 0,
// 		right: 0,
// 		bottom: 30,
// 		fontSize: 12,
// 		color: 'grey',
// 		textAlign: 'center',
// 		position: 'absolute',
// 	},
// })

// const TemplateTwo = ({ userResumeData }) => {
// 	return (
// 		<Document>
// 			<Page size={'FOLIO'} style={styles.body}>
// 				<View style={{ flexDirection: 'column' }}>
// 					<View style={{ flexDirection: 'row', height: 190 }}>
// 						<View
// 							style={{
// 								width: '35%',
// 								flexDirection: 'row',
// 								backgroundColor: '#f8f9fa',
// 							}}
// 						>
// 							<Image
// 								style={{
// 									width: 150,
// 									height: 150,
// 									padding: 10,
// 									borderRadius: '35',
// 								}}
// 								src={
// 									userResumeData.avatar === '' ||
// 									userResumeData.avatar === undefined
// 										? 'data:image/jpeg;base64,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'
// 										: userResumeData.avatar
// 								}
// 							/>
// 						</View>
// 						<View
// 							style={{
// 								fontSize: '11',
// 								marginLeft: 10,
// 								paddingTop: 15,
// 								paddingBottom: 15,
// 								alignItems: 'flex-start',
// 								justifyContent: 'flex-end',
// 							}}
// 						>
// 							<View>
// 								<Text style={styles.title}>
// 									{userResumeData.userFirstName +
// 										' ' +
// 										userResumeData.userSecondName}
// 								</Text>
// 								<Text style={styles.author}>
// 									{userResumeData.userProfession}
// 								</Text>
// 							</View>
// 							<Text style={{ alignItems: 'flex-start' }}>
// 								{userResumeData.userLocation}
// 							</Text>
// 							<View style={{ flexDirection: 'row' }}>
// 								<View style={{ borderRightColor: '#495057' }}>
// 									<Text>{userResumeData.userEmail} </Text>
// 								</View>
// 								<Text>{userResumeData.userPhoneNumber}</Text>
// 							</View>
// 						</View>
// 					</View>
// 					<View
// 						style={{
// 							height: 70,
// 							width: '100%',
// 							flexDirection: 'row',
// 							backgroundColor: '#4ad66d',
// 						}}
// 					>
// 						<Text
// 							style={{
// 								width: '50%',
// 								paddingTop: 5,
// 								fontSize: '11',
// 								marginLeft: 10,
// 							}}
// 						>
// 							{userResumeData.userProfileDescription}
// 						</Text>
// 						<View
// 							style={{
// 								paddingTop: 5,
// 								fontSize: '11',
// 							}}
// 						>
// 							<View style={styles.subtitle}>
// 								<View style={{ flexDirection: 'row', marginBottom: 3 }}>
// 									<Text style={{ fontWeight: 'bold' }}>LinkedIn </Text>
// 									<Link
// 										style={{ textDecoration: 'none', color: '#000000' }}
// 										src={`https://www.linkedin.com/in/${userResumeData.userLinkedInProfileName}/`}
// 									>
// 										{`https://www.linkedin.com/in/${userResumeData.userLinkedInProfileName}/`}
// 									</Link>
// 								</View>
// 								<View style={{ flexDirection: 'row', marginBottom: 3 }}>
// 									<Text style={{ fontWeight: 'bold' }}>Portfolio </Text>
// 									<Link
// 										style={{ textDecoration: 'none', color: '#000000' }}
// 										src={userResumeData.userPersonalWebsiteLink}
// 									>
// 										{userResumeData.userPersonalWebsiteLink}
// 									</Link>
// 								</View>
// 								<View style={{ flexDirection: 'row' }}>
// 									<Text style={{ fontWeight: 'bold' }}>Github </Text>
// 									<Link
// 										style={{ textDecoration: 'none', color: '#000000' }}
// 										src={`https://github.com/${userResumeData.userGitHubProfileName}`}
// 									>
// 										{`https://github.com/${userResumeData.userGitHubProfileName}`}
// 									</Link>
// 								</View>
// 							</View>
// 						</View>
// 					</View>
// 					<View style={{ flexDirection: 'row', height: '100%' }}>
// 						<View
// 							style={{
// 								width: '35%',
// 								fontSize: 12,
// 								paddingTop: 20,
// 								paddingLeft: 20,
// 								backgroundColor: '#f8f9fa',
// 							}}
// 						>
// 							<View
// 								style={{
// 									paddingLeft: 5,
// 									marginBottom: 15,
// 									borderLeftWidth: 3,
// 									borderLeftColor: '#2dc653',
// 								}}
// 							>
// 								<Text style={{ marginBottom: 5, color: '#2dc653' }}>
// 									Skills
// 								</Text>
// 								<View style={{ flexDirection: 'column' }}>
// 									{userResumeData.userSkills !== undefined ? (
// 										userResumeData.userSkills.length !== 0 ? (
// 											userResumeData.userSkills.map((skill, i) => (
// 												<Text key={i}>{skill}</Text>
// 											))
// 										) : (
// 											<></>
// 										)
// 									) : (
// 										<></>
// 									)}
// 								</View>
// 							</View>
// 							<View
// 								style={{
// 									fontSize: 12,
// 									paddingLeft: 5,
// 									marginBottom: 15,
// 									borderLeftWidth: 3,
// 									borderLeftColor: '#2dc653',
// 								}}
// 							>
// 								<Text style={{ marginBottom: 5, color: '#2dc653' }}>
// 									BioData
// 								</Text>
// 								<Text style={{ marginBottom: 2 }}>
// 									{userResumeData.userAge}
// 								</Text>
// 								<Text style={{ marginBottom: 2 }}>
// 									{userResumeData.userGender}
// 								</Text>
// 								<Text style={{ marginBottom: 2 }}>
// 									{userResumeData.userHouseAddress}
// 								</Text>
// 							</View>
// 							<EducationInfoSection
// 								title={'School'}
// 								institution={userResumeData.userHighSchoolName}
// 								degree={userResumeData.userHighSchoolDegreeName}
// 								endDate={userResumeData.userHighSchoolEndingDate}
// 								experience={userResumeData.userHighSchoolExperience}
// 								startDate={userResumeData.userHighSchoolStartingDate}
// 							/>
// 							<EducationInfoSection
// 								title={'College'}
// 								institution={userResumeData.userCollegeName}
// 								endDate={userResumeData.userCollegeEndingDate}
// 								degree={userResumeData.userHighSchoolDegreeName}
// 								experience={userResumeData.userCollegeExperience}
// 								startDate={userResumeData.userCollegeStartingDate}
// 							/>
// 							<EducationInfoSection
// 								title={'University'}
// 								degree={userResumeData.userBachelorDegreeName}
// 								institution={userResumeData.userUniversityName}
// 								endDate={userResumeData.userBachelorEndingDate}
// 								startDate={userResumeData.userBachelorStartingDate}
// 								experience={userResumeData.userUniversityExperience}
// 							/>
// 						</View>
// 						<View
// 							style={{
// 								flexGrow: '1',
// 								fontSize: '11',
// 								paddingTop: 15,
// 								marginLeft: 10,
// 								marginRight: 10,
// 								paddingBottom: 10,
// 								alignItems: 'flex-start',
// 							}}
// 						>
// 							<View
// 								style={{
// 									width: '100%',
// 									borderTopWidth: 3,
// 									borderTopColor: '#2dc653',
// 								}}
// 							>
// 								<View>
// 									<Text
// 										style={{ fontSize: 17, color: '#2dc653', marginBottom: 10 }}
// 									>
// 										Professional Experience
// 									</Text>
// 									<ProfessionalInfoSection
// 										experience={userResumeData.user1stExperience}
// 										companyName={userResumeData.user1stCompanyName}
// 										endDate={userResumeData.user1stExperienceEndingDate}
// 										startDate={userResumeData.user1stExperienceStartingDate}
// 										companyExperience={userResumeData.user1stCompanyExperience}
// 									/>

// 									<ProfessionalInfoSection
// 										experience={userResumeData.user2ndExperience}
// 										companyName={userResumeData.user2ndCompanyName}
// 										endDate={userResumeData.user2ndExperienceEndingDate}
// 										startDate={userResumeData.user2ndExperienceStartingDate}
// 										companyExperience={userResumeData.user2ndCompanyExperience}
// 									/>

// 									<ProfessionalInfoSection
// 										experience={userResumeData.user3rdExperience}
// 										companyName={userResumeData.user3rdCompanyName}
// 										endDate={userResumeData.user3rdExperienceEndingDate}
// 										startDate={userResumeData.user3rdExperienceStartingDate}
// 										companyExperience={userResumeData.user3rdCompanyExperience}
// 									/>
// 								</View>
// 							</View>
// 						</View>
// 					</View>
// 				</View>

// 				<Text
// 					style={styles.pageNumber}
// 					render={({ pageNumber, totalPages }) =>
// 						`${pageNumber} / ${totalPages}`
// 					}
// 					fixed
// 				/>
// 			</Page>
// 		</Document>
// 	)
// }

// export default TemplateTwo
