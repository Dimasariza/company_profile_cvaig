"use client"

import SideBarProject from './sidebar';
import { Navbar, Footer } from "@/components";
import { ProjectNavbar } from './project-navbar';
import ContentProject from './content';
import { useEffect, useState } from 'react';
import {
  Typography
} from "@material-tailwind/react";

const imagePerYear: any = 
{ 
  2022: {
    kendaga_nusantara: { total: 1, name: "KENDAGA-NUSANTARA-V", ext: ".jpg" }
  },
  2023: {
    berlin_nikroma: { total: 16, name: "BERLIN-NAKROMA", ext: ".jpeg" },
    lognus_v: { total: 16, name: "KM-LOGNUS-V", ext: ".jpg" },
    pulau_timor: { total: 16, name: "KP-PULAU-TIMOR", ext: ".jpeg" },
    salmon_mustofa: { total: 16, name: "MT-SALMON-MUSTOFA", ext: ".jpeg" },
    hd_dolphin: { total: 12, name: "MV-HD-DOLPHIN", ext: ".jpg" },
    hexen_argo: { total: 7, name: "MV-HEXEN-ARGO-II", ext: ".jpeg" },
    kintoki_inverter: { total: 16, name: "MV-KINTOKI-INVERTER", ext: ".jpeg" },
    kintoki_monitoring: { total: 12, name: "MV-KINTOKI-MONITORING", ext: ".jpeg" },
    kintoki_transformator: { total: 16, name: "MV-KINTOKI-TRANSFORMATOR", ext: ".jpeg" },
    timur_laut_mas: { total: 16, name: "MV-TIMUR-LAUT-MAS", ext: ".jpg" }
  },
  2024: {
    rb_japan: { total: 16, name: "RB-JAPAN", ext: ".jpg" },
    tb_muria_echo: { total: 14, name: "TB-MURIA-ECHO", ext: ".jpg" },
    tb_muria_rudder: { total: 16, name: "TB-MURIA-RUDDER", ext: ".jpg" }
  },
}


export default function ProjectPage() {
  const [image, setImage] = useState<any[] | null>([]);
  const viewProject = {year : 2024, name: "rb_japan"};

  const collectionImage: any[] = [];
  const targetImage = imagePerYear[viewProject.year][viewProject.name] 
  for(let i=1; i <= targetImage.total; i++) {
    collectionImage.push(`./projects/${viewProject.year}/${targetImage.name}-${i}${targetImage.ext}`)
  } 

  useEffect(() => {
    setImage(collectionImage)
  }, [])

  return (
    <>
      <ProjectNavbar />
      <SideBarProject /> 
      <ContentProject image={image} />
    </>
  );
}
