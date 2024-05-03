"use client"

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PlusCircleIcon 
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const datas = [
    {
        year : 2022,
        projects : [
            {   
                name : "KM Kendaga Nusantara V - Repair Safety Device AE3", 
                image : []
            },
            {   
                name : "KM LOGISTIK NUSANTARA V - SAFETY DEVICE AE EMERGENCY", 
                image : []
            }
        ]
    },
    {
        year : 2023,
        projects : [
            {   
                name : "MV hexen argo2 - Kontrol ME STBD", 
                image : []
            },
            {   
                name : "MV KINTOKI - REPAIR MINTORING MAIN ENGINE", 
                image : []
            },
            {   
                name : "KP PULAU TIMOR - REPAIR SAFETY DEVICE AE1", 
                image : []
            },
            {   
                name : "MT SALMON MUSTOFA - SERVICE ALTERNATOR CLASS B", 
                image : []
            },
            {   
                name : "MT TIMUR LAUT MAS - CONTROLLABLE PITCH PROPELLER", 
                image : []
            },
            {   
                name : "MV HD DOLPHIN - REWENDING ALTERNATOR", 
                image : []
            },
            {   
                name : "MV KINTOKI - SERVICE TRANSFORMER 380V/220V 80KVA", 
                image : []
            },
            {   
                name : "KMP BERLIN NAKROMA - SYNCHRONIZING AE1 & AE2", 
                image : []
            },
            {   
                name : "MV KINTOKI - INSTALL INVERTER 380V/440V 300 KW", 
                image : []
            },
        ]
    },
    {
        year : 2024,
        projects : [
            {   
                name : "RB JAPAN - REPAIR BUTTERFLY VALVE", 
                image : []
            },
            {   
                name : "TB MURIA - REPAIR SYSTEM RUDDER", 
                image : []
            },
            {   
                name : "TB MURIA - REPAIR ECHOSOUNDER", 
                image : []
            }
        ]
    },
]
 
function SideBarProject() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value : number)  => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh-5rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 mt-2">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Projects
        </Typography>
      </div>

      <List>
        {
            datas.map((item, key) => (
                <Accordion
                open={open === key}
                icon={
                    <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === key ? "rotate-180" : ""}`}
                    />
                }
                >
                <ListItem className="p-0" selected={open === key}>
                    <AccordionHeader onClick={() => handleOpen(key)} className="border-b-0 p-3">
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        {item.year}
                    </Typography>
                    </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                    <List className="p-0">
                        {
                            item.projects.map(({name, image}, key) => (
                                <ListItem key={key}>
                                    <ListItemPrefix>
                                    <PlusCircleIcon className="h-3 w-5" />
                                    </ListItemPrefix>
                                    {name}
                                </ListItem>
                            ))
                        }
                    </List>
                </AccordionBody>
                </Accordion>
            ))
        }
      </List>
    </Card>
  );
}

export default SideBarProject;