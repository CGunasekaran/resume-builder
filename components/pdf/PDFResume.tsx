import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { ResumeData, StyleConfig } from '@/lib/types/resume';

// Register custom fonts (optional)
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2' },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2', fontWeight: 700 },
  ],
});

interface Props {
  data: ResumeData;
  style: StyleConfig;
  templateId: string;
}

// Create styles
const createStyles = (styleConfig: StyleConfig) =>
  StyleSheet.create({
    page: {
      backgroundColor: styleConfig.colors.background,
      padding: 40,
      fontFamily: 'Inter',
    },
    header: {
      marginBottom: 20,
      borderBottomWidth: 3,
      borderBottomColor: styleConfig.colors.primary,
      paddingBottom: 15,
    },
    name: {
      fontSize: styleConfig.fontSize.name,
      fontWeight: 'bold',
      color: styleConfig.colors.primary,
      marginBottom: 8,
    },
    title: {
      fontSize: styleConfig.fontSize.heading,
      color: styleConfig.colors.secondary,
      marginBottom: 12,
    },
    contactRow: {
      flexDirection: 'row',
      gap: 15,
      fontSize: 10,
      color: styleConfig.colors.text,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: styleConfig.fontSize.heading,
      fontWeight: 'bold',
      color: styleConfig.colors.primary,
      textTransform: 'uppercase',
      marginBottom: 12,
      letterSpacing: 1,
    },
    experienceItem: {
      marginBottom: 15,
    },
    jobTitle: {
      fontSize: styleConfig.fontSize.subheading,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    company: {
      fontSize: 12,
      color: styleConfig.colors.secondary,
      fontWeight: 600,
      marginBottom: 2,
    },
    dateRange: {
      fontSize: 10,
      color: styleConfig.colors.secondary,
      marginBottom: 8,
    },
    bulletPoint: {
      fontSize: styleConfig.fontSize.body,
      marginBottom: 4,
      paddingLeft: 15,
      color: styleConfig.colors.text,
    },
    skillCategory: {
      marginBottom: 8,
    },
    skillCategoryName: {
      fontSize: 11,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    skillsList: {
      fontSize: 10,
      color: styleConfig.colors.secondary,
    },
  });

export default function PDFResume({ data, style, templateId }: Props) {
  const styles = createStyles(style);
  const { personalInfo, experience, education, skills } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
          <View style={styles.contactRow}>
            {personalInfo.email && <Text>{personalInfo.email}</Text>}
            {personalInfo.phone && <Text>•</Text>}
            {personalInfo.phone && <Text>{personalInfo.phone}</Text>}
            {personalInfo.location && <Text>•</Text>}
            {personalInfo.location && <Text>{personalInfo.location}</Text>}
          </View>
        </View>

        {/* Summary */}
        {personalInfo.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={{ fontSize: 11, lineHeight: 1.6 }}>
              {personalInfo.summary}
            </Text>
          </View>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <Text style={styles.jobTitle}>{exp.position}</Text>
                <Text style={styles.company}>{exp.company}</Text>
                <Text style={styles.dateRange}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </Text>
                {exp.description.map((desc, idx) => (
                  <Text key={idx} style={styles.bulletPoint}>
                    • {desc}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 10 }}>
                <Text style={styles.jobTitle}>
                  {edu.degree} in {edu.field}
                </Text>
                <Text style={styles.company}>{edu.institution}</Text>
                <Text style={styles.dateRange}>{edu.graduationDate}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {skills.map((skillGroup, idx) => (
              <View key={idx} style={styles.skillCategory}>
                <Text style={styles.skillCategoryName}>
                  {skillGroup.category}:
                </Text>
                <Text style={styles.skillsList}>
                  {skillGroup.items.join(', ')}
                </Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
