import { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './Line.scss';

const LineChart = (props: {
    datas: {
        time: number;
        score: number;
    }[]
}) => {
    const [isShowTooltip, setIsShowTooltip] = useState<Boolean>(false);
    const [tooltipContent, setTooltipContent] = useState<JSX.Element | string>('');
    const ref = useRef<SVGSVGElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeFormat = d3.timeFormat('%H:%M:%S');
        const tooltipTimeFormat = d3.timeFormat('%Y-%b-%d %H:%M:%S');
        const margin = ({top: 20, right: 10, bottom: 20, left: 40});
        const width = document?.querySelector('#root .container')?.clientWidth ?? 300;
        const height = 250;

        const newData: any = JSON.parse(JSON.stringify(props.datas));
        // [{"time":1619510720731,"score":2},{"time":1619510743700,"score":4}]
        
        newData.forEach((d: any) => {
            // formar time
            // console.log('parseTime', parseTime("1607326845882"));
            // console.log('timeFormat', timeFormat(new Date(1607326845882)));
            d.timestamp = d.time;
            d.time = timeFormat(d.time);
        });
        
        // const minTime: any = d3.min(newData, (d: any) => d.time);
        // const maxTime: any = d3.max(newData, (d: any) => d.time);
        // const min: any = d3.min(datas, (d) => d.score);
        // const max: any = d3.max(datas, (d) => d.score);

        let svgElement: any = null;
    
        // ranges
        
        // if want to use time as scale
        // const x: any = d3.scaleTime()
        //     .range([margin.left + 10, width - margin.right])
        //     .domain([minTime, maxTime]);

        // if want to use category as scale
        const paddingForX = 20;
        const x: any = d3.scalePoint()
            .range([margin.left + 10 + paddingForX, width - margin.right - paddingForX])
            .domain(newData.map((d: any) => { return d.time }));
        
        const y = d3.scaleLinear()
            .range([height - margin.bottom, margin.top])
            .domain([0, 100]);
        
        const drawline = d3.line()
            .curve(d3.curveMonotoneX)
            .x((d: any) => x(d.time))
            .y((d: any) => y(d.score))

        svgElement = d3.select(ref.current)
        svgElement.attr('viewBox', [0, 0, width, height]).attr('class', 'line-chart');

        svgElement.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            // if use timeScale
            // .call(d3.axisBottom(x).tickFormat((d: any) => timeFormat(d)).tickSizeOuter(0).tickSizeInner(0).tickPadding(10));
            .call(d3.axisBottom(x).tickSizeOuter(0).tickSizeInner(0).tickPadding(10));

        svgElement.append('g')
            .attr('class', 'y-axis')
            .attr('transform', `translate(${margin.left}, 0)`)
            // .call(d3.axisLeft(y).ticks(5).tickSize(-width).tickSizeOuter(0).tickSizeInner(0).tickPadding(10));
            // tickSize(-width) 畫出每條橫軸
            // tickPadding  每一個 y 軸上文字與橫線的間距
            // ticks 要拆幾格
            .call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(15));
            
        // remove both underline
        svgElement.selectAll('.domain').remove();
        svgElement.select('.domain').attr('stroke', '#999')

        // Set the gradient
        svgElement.append('linearGradient')
            .attr('id', 'line-gradient')
            .attr('gradientUnits', 'userSpaceOnUse')
            .selectAll('stop').data([
                { offset: '0%', color: '#ffa00b' },
                { offset: '100%', color: '#42605e' }
            ])
            .enter().append('stop')
            .attr('offset', (d: any) => d.offset )
            .attr('stop-color', (d: any) => d.color );

        svgElement.append('path')
            .attr('class', 'line')
            .attr('stroke', 'url(#line-gradient)')
            .attr('stroke-width', 3)
            .attr('fill', 'none')
            .style('stroke-linecap', 'round')
            .attr('d', drawline(newData));
        
        
        // filters go in defs element
        var defs = svgElement.append('defs');
        var filter = defs.append('filter')
            .attr('id', 'drop-shadow')
            .attr('height', height)
        filter.append('feGaussianBlur')
            .attr('in', 'SourceAlpha')
            .attr('stdDeviation', 4)
            .attr('result', 'blur');
        filter.append('feOffset')
            .attr('in', 'blur')
            .attr('dx', 0)
            .attr('dy', 15)
            .attr('result', 'offsetBlur');
        var feMerge = filter.append('feMerge');
        
        feMerge.append('feMergeNode').attr('in', 'offsetBlur')
        feMerge.append('feMergeNode').attr('in', 'SourceGraphic');
        
        svgElement.append('path')
            .attr('class', 'line-shadow')
            .style('filter', 'url(#drop-shadow)')
            .attr('d', drawline(newData));
        
        // insert circles
        svgElement.selectAll('circle')
            .data(newData)
            .enter()
            .append('circle')
            .attr('r', 5)
            .attr('cx', (d: any) => x(d.time))
            .attr('cy', (d: any ) => y(d.score))
            .style('cursor', 'pointer')
            .style('fill', () => {
                return '#795548';
            })
            .on('mouseover', function(d: any) {
                if (tooltipRef?.current) {
                    setIsShowTooltip(true);
                    const { pageX, pageY } = (d3 as any).event;
                    
                    if (pageX + 140 > window.innerWidth) {
                        tooltipRef.current.style.left = 'initial';
                        tooltipRef.current.style.right = (window.innerWidth - pageX) + 'px';
                    } else {
                        tooltipRef.current.style.left = pageX + 'px';
                    }

                    tooltipRef.current.style.top = (pageY - 70) + 'px';
                    
                    
                    setTooltipContent(<div>
                        <div>{tooltipTimeFormat(d.timestamp)}</div>
                        <div><strong>Score</strong>: {d.score}</div>
                    </div>);
                }
            })					
            .on('mouseout', function(d: any) {
                if (tooltipRef?.current) {
                    setIsShowTooltip(false);
                }
            });
    }, [props.datas]);

    return (
        <div className="line-chart-container">
            <svg ref={ref}></svg>
            <div className={`d3-tooltip ${isShowTooltip ? 'active' : '' }`} ref={tooltipRef}>{tooltipContent}</div>
        </div>
    )

}
export default LineChart;