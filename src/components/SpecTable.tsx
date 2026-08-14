import React from 'react';
import { SpecRow } from '../types';

export const SpecTable: React.FC = () => {
  const specs: SpecRow[] = [
    {
      metric: 'Average Compressive Strength',
      modifyBlock: '22.2 MPa',
      sandcreteStandard: '2.5 to 3.5 MPa',
      notes: 'Certified by SGS Matrocast under SANS 1215 standards',
    },
    {
      metric: 'Maximum Load (Peak)',
      modifyBlock: '711 kN',
      sandcreteStandard: 'Variable',
      notes: 'Calibrated hydraulic crush testing validation',
    },
    {
      metric: 'Dimensions (L x W x H)',
      modifyBlock: '385 x 190 x 180 mm',
      sandcreteStandard: 'Standard (450 x 225 x 225 mm / 150 mm)',
      notes: 'Precision-molded interlocking modular profile',
    },
    {
      metric: 'Dry Mass (Average)',
      modifyBlock: '15.29 kg',
      sandcreteStandard: 'Not applicable',
      notes: 'Optimized strength-to-weight hollow-core ratio',
    },
    {
      metric: 'Absorption Rate',
      modifyBlock: '5.0 percent, low-permeability optimized',
      sandcreteStandard: 'Higher, unoptimized',
      notes: 'Enhanced resistance to moisture ingress and weathering',
    },
  ];

  return (
    <div id="specifications-table-container" className="w-full overflow-hidden rounded-sm border border-[#B9C2CC] bg-[#FFFFFF] shadow-2xs">
      <div className="overflow-x-auto">
        <table id="specifications-table" className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#232B33] text-[#FFFFFF] text-sm sm:text-base border-b border-[#3C4857]">
              <th scope="col" className="py-3.5 px-4 sm:px-6 font-semibold tracking-wide">
                Engineering Parameter
              </th>
              <th scope="col" className="py-3.5 px-4 sm:px-6 font-semibold tracking-wide bg-[#2E3947]">
                Modify Block (Ref: 65749)
              </th>
              <th scope="col" className="py-3.5 px-4 sm:px-6 font-semibold tracking-wide text-[#9AA0A6]">
                Nigerian Sandcrete Standard
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#B9C2CC]/50 text-sm sm:text-base">
            {specs.map((row, index) => (
              <tr
                key={row.metric}
                className={index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F4F4EF]/60'}
              >
                <td className="py-4 px-4 sm:px-6 font-medium text-[#232B33]">
                  <div>{row.metric}</div>
                  {row.notes && (
                    <div className="text-xs text-[#9AA0A6] mt-0.5 font-normal">
                      {row.notes}
                    </div>
                  )}
                </td>
                <td className="py-4 px-4 sm:px-6 font-semibold text-[#232B33] bg-[#DCE8F1]/20">
                  <span className="inline-block px-2 py-0.5 bg-[#DCE8F1] text-[#22699F] rounded-xs font-mono text-xs sm:text-sm">
                    {row.modifyBlock}
                  </span>
                </td>
                <td className="py-4 px-4 sm:px-6 text-[#5B6570]">
                  {row.sandcreteStandard}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 sm:px-6 py-3 bg-[#F4F4EF] border-t border-[#B9C2CC] text-xs text-[#5B6570] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <span>Testing Authority: SGS Matrocast (SANAS-Accredited Laboratory)</span>
        <span className="text-[#9AA0A6]">Reference Standard: SANS 1215</span>
      </div>
    </div>
  );
};
