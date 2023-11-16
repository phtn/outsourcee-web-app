import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { SetLocationProps } from './types'

export function SelectLocation({ onValueChange }: SetLocationProps) {
	return (
		<Select onValueChange={(value) => onValueChange(value)}>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Your Location' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Select City</SelectLabel>
					<SelectItem value='Quezon City'>Quezon City</SelectItem>
					<SelectItem
						value='Manila'
						disabled>
						Manila
					</SelectItem>
					<SelectItem
						value='Mandaluyong'
						disabled>
						Mandaluyong
					</SelectItem>
					<SelectItem
						value='Makati'
						disabled>
						Makati
					</SelectItem>
					<SelectItem
						value='Paranaque'
						disabled>
						Paranaque
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
