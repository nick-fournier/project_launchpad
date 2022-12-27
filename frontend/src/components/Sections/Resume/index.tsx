import {FC, memo} from 'react';

import {awards, education, experience, publications, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import BibliographyItem from './BibliographyItem';
import Education from './Education';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import Timeline from './Timeline';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Experience">
          {experience.map((item, index) => (
            <Timeline item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <span className="flex-1 text-sm sm:flex-none">
            <ResumeSection title="Education">
              {education.map((item, index) => (
                <Education item={item} key={`${item.title}-${index}`} />
              ))}
            </ResumeSection>
          </span>
          <span className="flex-1 text-sm sm:flex-none">
            <ResumeSection title="Awards">
              {awards.map((item, index) => (
                <Education item={item} key={`${item.title}-${index}`} />
              ))}
            </ResumeSection>
          </span>
        </div>

        <ResumeSection title="Select Publications">
          {publications.map((item, index) => (
            <BibliographyItem item={item} key={`${item.doi_url}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
