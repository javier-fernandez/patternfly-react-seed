import * as React from 'react';

import { 
  PageSection, 
  Title, 
  Button,
  Alert,
  ToggleGroup, 
  ToggleGroupItem, 
  ToggleGroupItemProps 
} from '@patternfly/react-core';

import { Table, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';


const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Title! Título</Title>

    <br /><br />

    <div className="pf-v5-u-my-lg">
    <Button variant="primary" ouiaId="Primary">Nuevo boton</Button>
    </div>
    
    <br /><br />

    <div className="pf-v5-u-my-lg">
      <Alert variant="success" title="Success alert title" ouiaId="SuccessAlert" />
    </div>

    <br /><br />

    <div>
    <Table variant="compact" aria-label="Compact Table">
        <Thead>
          <Tr>
            <Th key="0">columns[0]</Th>
            <Th key="1">columns[1]</Th>
            <Th key="2">columns[2]</Th>
            <Th key="3">columns[3]</Th>
            <Th key="4">columns[4]</Th>
            <Th key="5">columns[5]</Th>
            <Th key="6">columns[6]</Th>
            <Th key="7">columns[7]</Th>
          </Tr>
        </Thead>
        <Tbody>
            <Tr key="rowIndex">
                <Td dataLabel="columns[0]">row.name</Td>
                <Td dataLabel="columns[1]">row.threads</Td>
                <Td dataLabel="columns[2]">row.applications</Td>
                <Td dataLabel="columns[3]">row.workspaces</Td>
                <Td dataLabel="columns[4]">row.tel</Td>
                <Td dataLabel="columns[5]">row.location</Td>
                <Td dataLabel="columns[6]">row.lastModified</Td>
                <Td dataLabel="columns[7]">row.lastcell</Td>
            </Tr>
        </Tbody>
      </Table>
    </div>
  </PageSection>
)

export { Dashboard };
