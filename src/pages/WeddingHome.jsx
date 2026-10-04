import React from 'react';
import OpeningSequence from '../components/cinematic/OpeningSequence';
import MeetCouple from '../components/chapters/MeetCouple';
import HowWeMet from '../components/chapters/HowWeMet';
import Families from '../components/chapters/Families';
import EmbeddedVideo from '../components/chapters/EmbeddedVideo';
import Wedding from '../components/chapters/Wedding';
import SpecialMoments from '../components/chapters/SpecialMoments';
import MapAndRSVPBlessings from '../components/chapters/MapAndRSVPBlessings';
import Forever from '../components/chapters/Forever';
import PageContainer from '../components/layout/PageContainer';
import { weddingConfig } from '../config/wedding.config';
import PetalEffect from '../components/effects/PetalEffect';
import BackgroundMusic from '../components/effects/BackgroundMusic';

export default function WeddingHome() {
  return (
    <PageContainer>
      <BackgroundMusic config={weddingConfig} />
      <PetalEffect />
      <OpeningSequence config={weddingConfig} />
      <MeetCouple config={weddingConfig} />
      <HowWeMet config={weddingConfig} />
      {/* <EmbeddedVideo config={weddingConfig} /> */}
      <Wedding config={weddingConfig} />
      <Families config={weddingConfig} />
      <SpecialMoments config={weddingConfig} />
      <MapAndRSVPBlessings config={weddingConfig} />
      <Forever config={weddingConfig} />
      {/* <Proposal config={weddingConfig} /> */}
    </PageContainer>
  );
}
