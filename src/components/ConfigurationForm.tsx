import React from 'react'
import {Form, Input, InputNumber, Button} from 'antd'
import {sendFormToServer} from '../utils/apiUtil'

const ConfigurationForm = () => {
	const onFinish = values => {
		processForm(values)
	}

	const processForm = value => {
		// value = 0
		sendFormToServer(value).then(data => console.log(data))
	}

	const onFinishFailed = errorInfo => {
		console.log('Failed to submit:', errorInfo)
	}

	const layout = {
		labelCol: {span: 8},
		wrapperCol: {span: 16},
	}

	const tailLayout = {
		wrapperCol: {offset: 8, span: 16},
	}

	return (
		<Form
			{...layout}
			name="basic"
			initialValues={{remember: true}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				label="Size"
				name="size"
				rules={[{required: true, message: 'Please input your size!'}]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Capacity"
				name="capacity"
				rules={[{required: true, max: 10, type: 'number'}]}
			>
				<InputNumber />
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Calculate
				</Button>
			</Form.Item>
		</Form>
	)
}

export default ConfigurationForm
