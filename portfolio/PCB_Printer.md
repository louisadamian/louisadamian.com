---
title: "PCB Printer"
layout: Portfolio
date: 2018-3-1
description: "Brings industrial Printed Circuit Board (PCB) manufacturing techniques to the home. Using an ultraviolet 
laser and an automated chemical etching process, the resulting PCBs are equally precise and durable at a fraction of the
cost."
img: pcb_printer.jpg
---
# PCB Printer 

![pcb printer](./img/pcb_printer.jpg =60%)

A prototyping device that automates prototyping Printed Circuit Boards (PCBs) by employing the fast high-resolution methods used in production manufacturing without the need for a large facility and team.
 
All previous solutions for prototyping printed circuit boards (PCBs) have been low resolution, unreliable, and expensive. PCB maker adapts professional manufacturing techniques in building a device that is inexpensive, small, and fully automated. Using a laser Galvanometer to cure UV photoresist, PCB maker creates the positive image of the final copper in photoresist on the board,  after which the remaining copper can be etched away with an acid bath.

Several aspects of the design have been improved in the new iteration. The electronics for the galvanometer were finished allowing control from an Arduino. A new enclosure was created that incorporates the galvanometer and acid bathing in one unit that fully automated the process by moving the board from a fixture where it is laser cured to different solvent baths for etching. In addition, work has been done to integrate milling so the board can be cut out of the rectangular blank. The file processing algorithm was merged into a desktop application that takes the standard output files for PCB production, creates a rasterization, and converts that to a path for the galvanometer to follow to cure the photoresist and create the copper image.
