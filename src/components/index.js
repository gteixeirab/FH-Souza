import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Container } from "./style";
import Tab from "./tabs";

export default function Components() {
  return (
    <Container>
      <Navbar />
      <Tab />
    </Container>
  );
}
