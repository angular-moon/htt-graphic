import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Label from './Label';

const Name = styled.span`
  color: wheat;
`;

const Value = styled.span`
  color: white;
  padding: 0 3px 0 10px;
`;

type Props = {
  dispersion: Array<number>,
};

function Dispersion({ dispersion }: Props) {
  return (
    <Label>
      离散度:
      <Value>{dispersion[0]}</Value>
      <Name>(htt)</Name>
      <Value>{dispersion[1]}</Value>
      <Name>(moon)</Name>
    </Label>
  );
}

const mapStateToProps = ({ dispersion }) => ({ dispersion });

export default connect(mapStateToProps)(Dispersion);
