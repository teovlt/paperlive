import React from 'react';
import FileInput from '../../../components/FileInput';
import { Button, Heading3, Label } from '../../../theme/appElements';
import { useTranslation } from 'react-i18next';
import { LinearContainer } from '../../Contributions/contributionsElements';

const FormStep2 = ({ submissionData, setSubmissionData, next, previous }) => {
  const { t } = useTranslation();

  return (
    <>
      <Heading3>
        Abstract
        <Label>
          {t('contribution.fileSupported')}: <span>pdf</span>
        </Label>
      </Heading3>
      <FileInput
        name='abstract'
        file={submissionData.abstract}
        endpoint='files/submission/abstract'
        onChange={(file) => setSubmissionData((prev) => ({ ...prev, abstract: file?.name }))}
      />
      <Heading3>
        {t('submission.zipFolder')}
        <Label>
          {t('contribution.fileSupported')}: <span>zip</span>
        </Label>
      </Heading3>
      <FileInput
        name='zipFolder'
        file={submissionData.zipFolder}
        endpoint='files/submission/zipfolder'
        onChange={(file) => setSubmissionData((prev) => ({ ...prev, zipFolder: file?.name }))}
      />
      <Heading3>
        {t('submission.compiledPDF')}
        <Label>
          {t('contribution.fileSupported')}: <span>pdf</span>
        </Label>
      </Heading3>
      <FileInput
        name='compiledPDF'
        file={submissionData.compiledPDF}
        endpoint='files/submission/compiledpdf'
        onChange={(file) => setSubmissionData((prev) => ({ ...prev, compiledPDF: file?.name }))}
      />
      <Heading3>
        {t('submission.diffPDF')}
        <Label>
          {t('contribution.fileSupported')}: <span>pdf</span>
        </Label>
      </Heading3>
      <FileInput
        name='diffPDF'
        file={submissionData.diffPDF}
        endpoint='files/submission/diffpdf'
        onChange={(file) => setSubmissionData((prev) => ({ ...prev, diffPDF: file?.name }))}
      />
      <Heading3>
        {t('submission.commentsPDF')}
        <Label>
          {t('contribution.fileSupported')}: <span>pdf</span>
        </Label>
      </Heading3>
      <FileInput
        name='commentPDF'
        file={submissionData.commentsPDF}
        endpoint='files/submission/commentsPDF'
        onChange={(file) => setSubmissionData((prev) => ({ ...prev, commentsPDF: file?.name }))}
      />
      <LinearContainer>
        <Button style={{ width: '160px' }} type='neutral' onClick={previous}>
          {t('global.previous')}
        </Button>
        <Button style={{ width: '160px' }} onClick={next}>
          {t('global.next')}
        </Button>
      </LinearContainer>
    </>
  );
};

export default FormStep2;
