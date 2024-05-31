import React from 'react'
import ServiceList from './ServiceList'

const Services = () => {
  const documentService = ['Apply Travel Document', 'Apply for VISA', 'Apply for Aadhar', 'Apply for PAN', 'Apply for Voter ID']
  const destinations = ['Domestic Tour', 'International Tour', 'Group Tour Package', 'Corporate Tours', 'Destination Wedding']
  const studyAbroad = ['Study in Canada', 'Study in USA', 'Study in New Zealand', 'Study in Germany', 'Study in France']
  const workAbroad = ['Jobs in UK', 'Jobs in Singapore', 'Jobs in Croatia', 'Jobs in Bahrain', 'Jobs in Greece']
  const itService = ['Web Design & Development', 'Software Development', 'Mobile App Development', 'Digital Marketing', 'Search Engine Optimisation']

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 p-4 w-[1263px ] h-[173px]'>
      <ServiceList title="Document Service" items={documentService} />
      <ServiceList title="Explore the Destinations" items={destinations} />
      <ServiceList title="Study Abroad" items={studyAbroad} />
      <ServiceList title="Work Abroad" items={workAbroad} />
      <ServiceList title="IT Service" items={itService} />
    </div>
  )
}

export default Services
